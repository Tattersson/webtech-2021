var streetName = $("#street");
var cityName = $("#city");
var map = $("#map");
var inputStreet;
var inputCity;

$(function (){

    console.log("Loaded");
    console.log("streeName: "+streetName+"- cityName: "+ cityName);
    console.log("Map link: " +map);
});
function search(){
    inputStreet = $("#street").val();
    inputCity = $("#city").val();
    console.log("streetName: "+inputStreet+" - cityName: "+ inputCity);

    $("#map").attr("src", "https://www.google.com/maps?q="+inputStreet+inputCity+"&output=embed");
}