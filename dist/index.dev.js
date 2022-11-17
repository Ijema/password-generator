"use strict";

function getPassword() {
  // Grab the word to be used to generate password and the length required
  var textInput = document.getElementById("text-input-password[]").value;
  var lengthInput = document.getElementById("text-input-length").value; // Display the generated password here

  var displayUnit1 = document.getElementById("display-unit1");
  var displayUnit2 = document.getElementById("display-unit2"); // Generates random password

  var x = "";
  var y = "";

  function passwordGen() {
    var generatePass1 = Math.floor(Math.random() * textInput.length);
    var generatePass2 = Math.floor(Math.random() * textInput.length);
    x += textInput[generatePass1];
    y += textInput[generatePass2];
  }

  for (var i = 0; i < lengthInput; i++) {
    passwordGen(); // if (( x === y) || ( x.length < lengthInput) || (y.length < lengthInput)){
    //     x = ""
    //     y = ""
    //     passwordGen()
    // }
    // else {
    // passwordGen()

    displayUnit1.value = x;
    displayUnit2.value = y; // }
  }

  return false;
}

document.querySelectorAll(".copy-password").forEach(function (copyLinkContainer) {
  var inputField1 = copyLinkContainer.querySelector("#display-unit1");
  var inputField2 = copyLinkContainer.querySelector("#display-unit2");
  var copyInput1 = copyLinkContainer.querySelector(".copy-link-input1");
  var copyInput2 = copyLinkContainer.querySelector(".copy-link-input2"); // selects everything when you click on the input box

  inputField1.addEventListener("focus", function () {
    inputField1.select();
  });
  inputField2.addEventListener("focus", function () {
    inputField2.select();
  }); //enables the copy button to copy the text once it is clicked

  copyInput1.addEventListener("click", function () {
    // grabs the value of the textboxes
    var text1 = inputField1.value;
    inputField1.select(); // this performs the actual copying

    navigator.clipboard.writeText(text1);
    inputField1.value = "Copied";
    setTimeout(function () {
      return inputField1.value = text1;
    }, 1000);
  });
  copyInput2.addEventListener("click", function () {
    // grabs the value of the textboxes
    var text2 = inputField2.value;
    inputField2.select();
    navigator.clipboard.writeText(text2);
    inputField2.value = "Copied";
    setTimeout(function () {
      return inputField2.value = text2;
    }, 1000);
  });
});
//# sourceMappingURL=index.dev.js.map
