
function search(){
    var street = document.getElementById("street").nodeValue.replace(" ", "");
    var city = document.getElementById("city").nodeValue.replace(" ", "");

    document.getElementById("map").setAttribute("src", "http://maps.googlehttps://www.google.com/maps?q=" + street + city + "&output=embed");
}

