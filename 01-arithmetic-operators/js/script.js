function toFahrenheit(celcius) {
    // var celcius = 12;
    document.write('Celcius: ' + celcius + "<br>");
    var fahrenheit = (celcius * 9 / 5) + 32;
    document.write('Fahrenheit: ' + fahrenheit);
    return fahrenheit;
    
}
var x = window.prompt("Enter celcius value: ");
var y = parseInt(x);
// toFahrenheit(y);
var title= "Temperature Conversion";