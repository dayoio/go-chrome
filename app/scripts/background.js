'use strict';

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {cancel: true};
  },
  {
    urls: [
      "http://*/videos/other/*",
      "http://msg.71.am/cp2.gif*"
    ]
  }, ['blocking']);
