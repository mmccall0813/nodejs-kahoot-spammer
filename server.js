var fetchUrl = require("fetch").fetchUrl;
setInterval(function(){fetchUrl("http://snappeathing282346239557829348747259837723489.000webhostapp.com/pin.txt", function(error, meta, body){
    changeVar(body.toString());
})}, 300)
setInterval(function(){fetchUrl("http://snappeathing282346239557829348747259837723489.000webhostapp.com/status.txt", function(error, meta, body){
    changeStat(body.toString());
})}, 300)
var x;
var y;
function changeVar(a){
  x = a;
}
function changeStat(a){
  y = a;
}
setInterval(function(){console.log(x + "    " + y)}, 10000)
var n = `0`; // this one is bot name
var nc; // ignore this
var ns = 300; // bot amount
var Kahoot = require("kahoot.js-updated");
var i = 250; // bot join delay (in miliseconds)
function client() { // ignore everything below
  return new Kahoot;
}
if(nc==null){
  nc=0
}
setInterval(function(){if(y == "true"){if(nc == ns){}else{client().join(x, n+nc)}}}, i);
setInterval(function(){if(y == "true"){if(nc == ns){}else{nc=nc+1}}}, i);
