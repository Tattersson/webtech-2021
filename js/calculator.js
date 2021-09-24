let counter = 0;

/*window.onload = function(){
    document.getElementById("firstTextInput").value = 0;
    document.getElementById("secondTextInput").value = 0;
    document.getElementById("result").value = 0;
    document.getElementById("counter").innerHTML = "Laskukertoja "+counterCalc+" kpl";
}*/

$(function () {
  console.log("Document Loaded Properly");

  $("#firstTextInput").val(0);
  $("#secondTextInput").val(0);
  $("#result").val(0);
  $("#counterCol").text("Laskukertoja " + counter + " kpl.");
  console.log("counterCol: " + counter);
});

function calculate() {
  counter++;
  $("#counterCol").text("Laskukertoja " + counter + " kpl.");

  let selectedText = $("#operationSelect option:selected").text();
  let selectedValue = $("#operationSelect").val();
  let firstInput = $("#firstTextInput").val();
  let firstInputValue = parseInt(firstInput);
  let secondInput = $("#secondTextInput").val();
  let secondInputValue = parseInt(secondInput);

  console.log("selectedText: " + selectedText);
  console.log("selectedValue: " + selectedValue);
  console.log("selectedFirstTextInput: " + firstInput);
  console.log("selectedSecondTextInput: " + secondInput);

  //#region If-Else
  if (selectedValue == 1) {
    result = firstInputValue + secondInputValue;
  } else if (selectedValue == 2) {
    result = firstInputValue - secondInputValue;
  } else if (selectedValue == 3) {
    result = firstInputValue * secondInputValue;
  } else {
    result = firstInputValue / secondInputValue;
  }
  //#endregion

  console.log("Result is: " + result);
  $("#result").val(result);
}
