chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.getCurrent(function (tab) {
    console.log(tab);
  });
});
