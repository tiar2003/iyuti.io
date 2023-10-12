var text = "CARA MEMBUAT TULISAN BERJALAN SEPERTI DIKETIK PADA BLOG";
  var delay = 100; // milliseconds
  var currentChar = 0;
  var destination = "textDestination";

  function type() {
    var dest = document.getElementById(destination);
    if (dest) {
      dest.innerHTML = text.substr(0, currentChar) + "<blink>_</blink>";
      currentChar++;
      if (currentChar > text.length) {
        currentChar = 0;
        setTimeout(type, 5000); // Pause for 5 seconds after completing
      } else {
        setTimeout(type, delay);
      }
    }
  }

  function startTyping(textParam, delayParam, destinationParam) {
    text = textParam;
    delay = delayParam;
    currentChar = 0;
    destination = destinationParam;
    type();
  }