
var f = document.getElementById('flash');
var c = document.getElementsByClassName('act_shares')[0].childNodes[1];
var o = document.getElementsByClassName('code-input fl')[1];
f.data = '';

var s = setInterval(function () {
  c.click();
  console.log(o.value);
  if (o.value !== "") {
    f.data = o.value;
    c.click();
    document.getElementsByClassName('videoWindow_cover')[0].style = "width:0;height:0;display:none;"
    clearInterval(s);
  }
}, 1000);
