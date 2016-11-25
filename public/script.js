$(document).ready(function(){
  $("button.search").on("click", function(e){
    var searchParam = $("input#image-search").val();
    var offsetParam = $("input#offset").val() || 1;
    var full = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
    var path = full + "/api/imagesearch/" + searchParam + "?offset=" + offsetParam;
    alert(path);
    location.href = path;
  });
  $("button.latest").on("click", function(e){
    location.href = location.hostname + "/api/lastest";
  });
});
