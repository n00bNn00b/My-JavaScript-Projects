var boys = window.prompt("Enter total no. of boys: ");
var girls = window.prompt("Enter total no. of girls: ");

var x = parseInt(boys);
var y = parseInt(girls);
var total = x + y;
console.log(total);

var perB = x / total * 100;
var perG = y / total * 100;

document.write("If the total no. of boys is " + x + " and total no. of girls is " + y + " in the class, <br>");

document.write("Percentage of Boys in the class is: " + perB + "<br>");
document.write("Percentage of Girls in the class is: " + perG);
