var http = require("http");
var express = require("express");

var google = require('googleapis');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var moment = require("moment");
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var API_KEY = process.env.API_KEY;
var CSE_ID = process.env.GOOGLE_CSE_ID;
const db_url = process.env.MONGOLAB_URI;

var app = express();
app.set('views', __dirname + '/views');
app.set("view engine", "pug");
app.use(express.static(__dirname + '/public'));

app.get("/api/imagesearch/:s_param", function(request, response){
  let s_param = request.params.s_param;
  let offset = request.query.offset || 1;

  MongoClient.connect(db_url, function(err, db) {
    assert.equal(null, err);
    var formattedDate = moment(new Date()).format('MMMM DD, YYYY hh:mm:ss');
    db.collection("imagesearch_log").insertOne({ term: s_param, when: formattedDate }, function(err2, value){
      console.log("Search " + s_param + " saved");
      db.close();
    });
  });

  var customsearch = google.customsearch({ version: 'v1', auth: API_KEY });
  params = {
    cx: CSE_ID,
    q: s_param,
    searchType: 'image',
    start: offset
  };

  let result = [];
  customsearch.cse.list(params, function(err, searchResult){
    if (err) {
      response.end('Encountered error', err);
    } else {
      searchResult.items.forEach(function(item){
        result.push({url: item.link, snippet: item.snippet, thumbnail: item.image.thumbnailLink, context: item.image.contextLink });
      });
      response.end(JSON.stringify(result, null, 4));
    }
  });
});

app.get("/api/latest", function(request, response){
  MongoClient.connect(db_url, function(err, db) {
    assert.equal(null, err);
    db.collection("imagesearch_log").find(function(err2, result){
      if (err2) {
        response.end('Encountered error retrieving lastest image search: ', err2);
      } else {
        response.end(JSON.stringify(result, null, 4));
      }
      db.close();
    });
  });
});

app.post('/api/upload', upload.single('uploadFile'), function (req, res, next) {
    res.writeHead(200, { "Content-Type": "text/plain"});
    res.end(JSON.stringify({ size: req.file.size }, null, "  "));
});

app.get("/", function(req,res){
  res.render('index');
});

var server = http.createServer(app);
server.listen(process.env.PORT || 8080);
console.log("app started");
