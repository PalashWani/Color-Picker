let color = 'red';

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({ color });
})
//this file is used by service worker and can be used to change the configurations of the extension
//For ex. the color defined here can be used in popup.js via
//const color = chrome.storage.sync.get('color', ({color}) => {
//console.log('color: ', color);
//})
