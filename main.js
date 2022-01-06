verified = 'false'
rdmnmbr = Math.floor(100000 + Math.random() * 900000)

ThunkableWebviewerExtension.postMessage(rdmnmbr)

function Checkforcode() {

  userincode = document.getElementById('code').value
  if (userincode == rdmnmbr) {
    window.open("videocll.html");
    document.getElementById('result').innerHTML = 'Logging you in'
  }
  else
    document.getElementById('result').innerHTML = 'Code Invalid'


}
function checkifverified() {


  if (verified == "true") {

    window.open("index.html", "_self");
  }
}
