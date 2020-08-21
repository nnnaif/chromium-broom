'use strict';

chrome.runtime.onStartup.addListener(() => {
  // reloads extension because for some reason downloads.erase() doesnt work more than once.
  chrome.runtime.reload();
})
chrome.history.deleteAll(() => { console.log("Cleared history.") });
chrome.downloads.erase({}, () => { console.log("Cleared downloads.") })
