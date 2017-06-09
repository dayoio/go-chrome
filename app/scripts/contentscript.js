(function (document) {
  var flashbox = document.getElementById('flashbox')
  var container = flashbox.parentElement
  var definitionId = flashbox.getAttribute('data-player-videoid')
  var tvId = flashbox.getAttribute('data-player-tvid')
  container.removeChild(flashbox)
  var src = 'http://www.iqiyi.com/common/flashplayer/20170406/1556f98c2359.swf?menu=false&autoplay=true&cid=qc_100001_100100&flashP2PCoreUrl=http://www.iqiyi.com/common/flashplayer/20170406/15562a1b82aa.swf&=undefined&&definitionID=' + definitionId + '&tvId=' + tvId + '&isPurchase=0&cnId=4&coop=ugc_openapi_wanyouwang&cid=qc_100001_300089&bd=1&autoChainPlay=1&showRecommend=0&source=&purl='

  //
  var ifrm = document.createElement('iframe')
  ifrm.id = 'flashbox'
  ifrm.frameborder = 0
  ifrm.border = 0
  ifrm.marginwidth = 0
  ifrm.marginheight = 0
  ifrm.scrolling = 'no'
  container.appendChild(ifrm)
  var doc = ifrm.contentDocument ? ifrm.contentDocument : ifrm.contentWindow.document

  var embed = document.createElement('embed')
  embed.setAttribute('align', 'middle')
  embed.setAttribute('width', '100%')
  embed.setAttribute('height', '100%')
  embed.setAttribute('allowFullScreen', 'true')
  embed.setAttribute('allowScriptAccess', 'always')
  embed.setAttribute('bgcolor', '#000000')
  embed.setAttribute('quality', 'high')
  embed.setAttribute('src', src)
  doc.body.appendChild(embed)

  // jujiPlayWrap > play-rc-pack
  document.getElementById('jujiPlayWrap').classList.add('play-rc-pack')
  document.getElementById('movieListContainer').style.display = 'none'
})(document)
