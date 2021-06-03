console.log('started')

function search(){
    var street = document.getElementById(street).nodeValue.replace(" ", "");
    var city = document.getElementById(city).nodeValue.replace(" ", "");

    document.getElementById(map).setAttribute("src", "https://www.google.com/maps?q=" + street + city + "&output=embed");
}