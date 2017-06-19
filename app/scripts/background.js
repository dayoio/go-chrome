chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {cancel: true}
  },
  {
    urls: [
      'http://*/videos/other/*',
      'http://msg.71.am/cp2.gif*',
      'http://static.iqiyi.com/js/player_v1/res/*'
    ]
  }, ['blocking'])
