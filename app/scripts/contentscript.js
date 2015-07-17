(function (document) {
  var f = document.getElementById('flash');
  var c = document.getElementsByClassName('act_shares')[0].childNodes[1];
  var o = document.getElementsByClassName('code-input fl')[1];
  f.data = '';

  var css = '.videoWindow_cover { width:0; height:0; display:none;} .zongyi-rightList { display:none;} body.qypage-1180 .play-zongyiWrap .zongyiVideo, body.qypage-1440 .play-zongyiWrap .zongyiVideo, .play-zongyiWrap .zongyiVideo { float: none; margin: 0 auto;}';

  var style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.head.appendChild(style);

  var s = setInterval(function () {
    c.click();
    console.log(o.value);
    if (o.value !== "") {
      f.data = o.value;
      c.click();
      clearInterval(s);
    }
  }, 1000);


})(document)