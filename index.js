var http = require("http");
var express = require("express");

const ImagesClient = require('google-images');
//const googleIms = require('google-ims');
const got = require('got');
var google = require('googleapis');

var API_KEY = 'AIzaSyCdxl0vCH_vXT-ijYqADbEO5WXFfMHHtYQ';

var app = express();
app.get("/api/imagesearch/:s_param", function(request, response){
  let s_param = request.params.s_param;
  let offset = request.query.offset || 1;

  var customsearch = google.customsearch({ version: 'v1', auth: API_KEY });
  params = {
    cx: '007375434282591706073:jvjnxmqnnjo',
    q: 'cats',
    searchType: 'image',
    start: 1
  };
  customsearch.cse.list(params, function(err, response){
    if (err) {
      response.end('Encountered error 2', err);
    } else {
      response.end(JSON.stringify(response, null, 4));
    }
  });


  /*let client = new ImagesClient('007375434282591706073:jvjnxmqnnjo', 'AIzaSyCdxl0vCH_vXT-ijYqADbEO5WXFfMHHtYQ');
  client.search(s_param)
      .then(function (images) {
        let result = [];
        console.log(images);
        images.forEach(function(image){
          result.push({url: image.url, thumbnail: image.thumbnail.url });
        });
        //response.end(JSON.stringify(result, null, 4));
        console.log(JSON.stringify(images, null, 4));
        response.end(JSON.stringify(images, null, 4));
      });
*/
});

var server = http.createServer(app);
server.listen(process.env.PORT || 8080);
console.log("app started");


var urlshortener = google.urlshortener('v1');
var params = {
  shortUrl: 'http://goo.gl/xKbRu3'
};

// get the long url of a shortened url
urlshortener.url.get(params, function (err, response) {
  if (err) {
    console.log('Encountered error', err);
  } else {
    console.log('Long url is', response.longUrl);
  }
});
