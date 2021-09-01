let counterCalc = 0;

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
    $("#counter").text("Laskukertoja "+counterCalc+" kpl");
})

