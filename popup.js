// inital
// create data-extension
if (!localStorage.getItem('data-extension')) localStorage.setItem('data-extension', '')
//

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    localStorage.setItem('data-extension', request.source.toString())
    results.innerHTML = request.source;
  }
});

function onWindowGetData() {

  var results = document.querySelector('#results');

  chrome.tabs.executeScript(null, {
    code: `var text = 'text'`
  }, function() {
    chrome.tabs.executeScript(null, {
      file: 'getPagesSource.js'
    } )
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      results.innerHTML = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}
window.onload = function() {
  results.innerHTML = localStorage.getItem('data-extension')
  document.getElementById('getData').onclick = function() {
    onWindowGetData()
  }
}