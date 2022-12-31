function setValue() {
  var text = document.getElementById("input").value;
  var output = text.replace(/(\r\n|\n|\r)/gm, " ");
  document.getElementById("output").innerHTML = output;

  console.log("Input: " + text);
  console.log("Output: " + output);
}

function copyText() {
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied to clipboard!");
}