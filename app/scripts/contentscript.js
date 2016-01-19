(function (document) {
  var player = document.getElementById('flash');
  var flashVars = document.getElementsByName("flashVars")[0];
  var params = flashVars.value.split("&");
  var value = "";
  for (var i = 0; i < params.length; i++) {
    if (params[i].indexOf("definitionID") == 0 ||
      params[i].indexOf("menu") == 0 ||
      params[i].indexOf("autoplay") == 0 ||
      params[i].indexOf("tvId") == 0 ||
      params[i].indexOf("flashP2PCoreUrl") == 0 ||
      params[i].indexOf("albumId") == 0
    ) {
      if (value != "") value += "&";
      value += params[i];
    } else if (params[i].indexOf("cid") == 0) {
      value += "&cid=qc_100001_100100"
    }
  }
  flashVars.value = value + "&menu=false";
  //player.data = "http://www.iqiyi.com/common/flashplayer/20151209/MainPlayer_5_2_30_c3_3_8_1.swf?r=" + Math.random();

  var embed = document.createElement('embed');
    embed.setAttribute("align", "middle");
    embed.setAttribute("width", "100%");
    embed.setAttribute("height", "100%");
    embed.setAttribute("scale", "showall");
    embed.setAttribute("allowfullscreen", "true");
    embed.setAttribute("allowscriptaccess", "always");
    embed.setAttribute("bgcolor", "#000000");
    embed.setAttribute("type", "application/x-shockwave-flash");
    embed.setAttribute("pluginspage", "http://www.macromedia.com/go/getflashplayer");
    embed.setAttribute("wmode", "Opaque");
    embed.setAttribute("quality", "high");
    embed.setAttribute("src", player.data);
    embed.setAttribute("flashvars", flashVars.value);
    embed.setAttribute("allownetworking", "all");
    embed.setAttribute("name", "flash");
    player.parentElement.appendChild(embed);
    player.parentElement.removeChild(player);
})(document)
