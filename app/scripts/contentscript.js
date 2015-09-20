(function (document) {
  var player = document.getElementById('flash');
  var flashVars = document.getElementsByName("flashVars")[0];
  var params = flashVars.value.split("&");
  var value = "";
  for (var i = 0; i < params.length; i++) {
    if (params[i].indexOf("definitionID") == 0 ||
      params[i].indexOf("menu") == 0 ||
      params[i].indexOf("autoplay") == 0 ||
      params[i].indexOf("tvId") == 0
    ) {
      if (value != "") value += "&";
      value += params[i];
    } else if (params[i].indexOf("flashP2PCoreUrl") == 0) {
      value += "&flashP2PCoreUrl=http://www.iqiyi.com/common/flashplayer/20150512/30037.swf"
    } else if (params[i].indexOf("cid") == 0) {
      value += "&cid=qc_100001_100100"
    }
  }
  flashVars.value = value + "&menu=false";
  player.data = player.data + "?rd=" + Math.random();
})(document)