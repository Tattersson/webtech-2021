let counter = 0;


/*window.onload = function(){
    document.getElementById("firstTextInput").value = 0;
    document.getElementById("secondTextInput").value = 0;
    document.getElementById("result").value = 0;
    document.getElementById("counter").innerHTML = "Laskukertoja "+counterCalc+" kpl";
}*/

$(function() {
  $("#firstTextInput").val(0);
  $("#secondTextInput").val(0);
  $("#result").val(0);
  $("#counterCol").text("Laskukertoja " + counter + " kpl.");
});
$("#calculateBtn").on("click", function() {
  counter++;
  $("#counterCol").text("Laskukertoja " + counter + " kpl.");

  let selectedText = $("#operationSelect option:selected").text(); // +
  let selectedValue = $("#operationSelect").val(); 
  console.log("selectedText: "+selectedText);
  console.log("selectedValue: "+selectedValue);
});