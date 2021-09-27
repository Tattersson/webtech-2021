let counter = 0;
var firstInputText;
var secondInputText;
var min;
var max;

/*window.onload = function(){
    document.getElementById("firstTextInput").value = 0;
    document.getElementById("secondTextInput").value = 0;
    document.getElementById("result").value = 0;
    document.getElementById("counter").innerHTML = "Laskukertoja "+counterCalc+" kpl";
}*/
$(function mathRancomFunc() {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
});

$(function () {
  console.log("Document Loaded Properly");
  //Make MATHRandom to this function to randomise numbers between 0-9
  $("#firstTextInput").val(min);
  $("#secondTextInput").val(max);
  $("#result").val(0);
  $("#counterCol").text("Laskukertoja " + counter + " kpl.");
  console.log("counterCol: " + counter);
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
