let counter = 0;
var firstInputText;
var secondInputText;
var min;
var max;

$(function () {
  var max = Math.floor(Math.random() * 10) + 1;
  var min = Math.floor(Math.random() * 10) + 1;

  console.log("mathRandomFunc returned values: " + min + " and " + max);
  console.log("Document Loaded Properly");

  $("#firstTextInput").val(min);
  $("#secondTextInput").val(max);
  $("#result").val(0);
  $("#counterCol").text("Laskukertoja " + counter + " kpl.");
  console.log("counterCol: " + counter);

  $("#minusSecond").on("click", function () {
    var minus = $("#secondTextInput").val();
    minus--;
    $("#secondTextInput").val(minus);
  });
  $("#plusSecond").on("click", function () {
    var plus = $("#secondTextInput").val();
    plus++;
    $("#secondTextInput").val(plus);
  });
  $("#minusFirst").on("click", function () {
    var minus = $("#firstTextInput").val();
    minus--;
    $("#firstTextInput").val(minus);
  });
  $("#plusFirst").on("click", function () {
    var plus = $("#firstTextInput").val();
    plus++;
    $("#firstTextInput").val(plus);
  });
});

function calculate() {
  counter++;
  $("#counterCol").text("Laskukertoja " + counter + " kpl.");

  let selectedText = $("#operationSelect option:selected").text();
  let selectedValue = $("#operationSelect").val();
  firstInputText = $("#firstTextInput").val();
  secondInputText = $("#secondTextInput").val();

  //Here comes the checkInputs
  if (
    firstInputText &&
    !isNaN(firstInputText) &&
    secondInputText &&
    !isNaN(secondInputText)
  ) {
    firstInput = parseInt(firstInputText);
    secondInput = parseInt(secondInputText);
    console.log("selectedText: " + selectedText);
    console.log("selectedValue: " + selectedValue);
    console.log("selectedFirstTextInput: " + firstInput);
    console.log("selectedSecondTextInput: " + secondInput);
    //#region If-Else-Calculation
    if (selectedValue == 1) {
      result = firstInput + secondInput;
    } else if (selectedValue == 2) {
      result = firstInput - secondInput;
    } else if (selectedValue == 3) {
      result = firstInput * secondInput;
    } else {
      result = firstInput / secondInput;
    }
    //#endregion
  } else {
    alert("Not a number");
  }

  console.log("Result is: " + result);
  $("#result").val(result);
}
