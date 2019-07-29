// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStatus"){
      sendResponse(localStorage.getItem('data-extension'));
    }
    else
      sendResponse({}); // snub them.
});
chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(tab.id, {code: ""}, function(response) {
      // alert(response)
    });
});
window.onload = function (){
  chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    console.log(document)
  })
}