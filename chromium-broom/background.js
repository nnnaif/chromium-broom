'use strict';
chrome.history.deleteAll(()=>{console.log("Cleared history.")});
chrome.downloads.erase({}, ()=>{console.log("Cleared downloads.")})
