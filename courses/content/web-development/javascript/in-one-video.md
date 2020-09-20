---
date: 2017-10-22T11:23:34-04:00
title: "In One Video"
seo_title: "In One Video | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers Javascript programming in one video.
author: GOUP
image: building-a-calculator.png
video: TLlGhogq56Y
url: /web-development/javascript/in-one-video/
weight: 29
---

## JavaScript Overview

Javascript is a high-level, dynamically typed and interpreted, programming
language that was created in May of 1995 by Netscape employee Brendan Eich.

The language was famously created in only 10 days and adopted the name Javascript
as a marketing play, playing off the hugly popular Java programming language.
Although ironically the two languages are very different.

Javascript was built with the sole purpose of making websites more responsive and
dynamic. Because it's able to respond to user interactions and access and manipulate
the document object model (DOM), Javascript allows web developers to make
more dynamic websites.

In 1996 the early version of Javascript was adopted into a formal language specification
called ECMAScript, of which Javascript was the most well known implementation.
By specifying the language formally, all browsers could support languages implementing
ECMAScript. So Technically Javascript is based off the ECMAScript specification.

### How JavaScript Runs

Today Javascript is a staple, used on just about every modern website. It's become
one of the three core web development technologies along-side HTML and CSS.

Because javascript is a core web development technology and most web developers
know it, Javascript has been stretched beyond it's original purpose. Now-a-day's
there are thousands of javascript frameworks and it's even used as a server-side
language.

Javascript utilizes a garbage collector and it's syntax is loosly based on C/C++.

### Choosing an IDE

Many developers choose to write Javascript using a basic text editor, generally
Javascript will be written in the same enviornment as the HTML and front end technologies
that it interacts with. In many cases javascript will be written directly inside
of an HTML file, but can also be palced in it's own separate Javascript file and
imported into HTML.

## Code

### Printing
{{< code lang="js" >}}
document.write("<h1>Hello World</h1>");
document.write("<hr>");
document.write("<p>This is a javascript tutorial</p>");
alert("This is an alert");
console.log("Logging to the console");
{{< /code >}}

### Variables and Data Types
{{< code lang="js" >}}
/*
Names are case-sensitive and may begin with:
     letters, $, _
After, may include
     letters, numbers, $, _
Convention says
     Start with a lowercase word, then additional words are capitalized
     ex. myFirstVariable
*/
var name = "Mike";                 // String w/ double quotes
var occupation = 'programmer';     // String w/ single quotes

var age = 20;                      // Integer
var gpa = 2.5;                     // Floating point number

var isTall;                        // boolean true/false
isTall = true;

name = "John";

document.write("Your name is " + name);
{{< /code >}}

### Casting and Converting
{{< code lang="js" >}}
document.write( 100 + Number("25") + "<br>");
document.write( 100 + parseInt("50") + "<br>");
document.write( 100 + parseFloat("50.99") + "<br>");

{{< /code >}}

### Strings
{{< code lang="js" >}}
var greeting = "Hello";
//   indexes:   01234

document.write( greeting.length + "<br>" );
document.write( greeting.charAt(0) + "<br>"  );
document.write( greeting.indexOf("llo") + "<br>"  );
document.write( greeting.indexOf("z") + "<br>"  );
document.write( greeting.substring(2) + "<br>"  );
document.write( greeting.substring(1, 3) + "<br>"  );

{{< /code >}}

### Numbers
{{< code lang="js" >}}
document.write( 2 * 3 + "<br>" );       // Basic Arithmetic: +, -, /, *
document.write( 2**3 + "<br>" );        // Exponents
document.write( 10 % 3 + "<br>" );      // Modulus Op. : returns remainder of 10/3
document.write( 1 + 2 * 3 + "<br>" );   // order of operations
document.write(10 / 3.0 + "<br><br>");      // int's and doubles


var num = 10;
num += 100;                              // +=, -=, /=, *=
document.write(num + "<br>");

num++;
document.write(num + "<br><br>");

// Math class has useful math methods
document.write( Math.pow(2, 3) + "<br>" );
document.write( Math.sqrt(144) + "<br>" );
document.write( Math.round(2.7) + "<br>" );

{{< /code >}}

### User Input
{{< code lang="js" >}}
var name = window.prompt("Enter your name: ");
alert("Your name is " + name);
{{< /code >}}

### Accessing HTML
{{< code lang="html" file="index.html">}}
<h1 id="myHeader" giraffe="Giraffe Attr">GOUP</h1>
<script src="script.js"></script>
{{< /code >}}

{{< code lang="js" file="script.js">}}
var header = document.getElementById("myHeader");
header.style="color:blue; background-color:red;"
document.write( header.getAttribute("giraffe") );
header.innerHTML = "Elephant Academy";
{{< /code >}}

### Arrays
{{< code lang="js" >}}
// luckyNumbers = [];
luckyNumbers = [4, 8, 15, 16, "twenty", false];
//  indexes:    0  1  2   3      4        5

luckyNumbers[0] = 90;
document.write(luckyNumbers[0] + "<br>");
document.write(luckyNumbers[1] + "<br>");
document.write(luckyNumbers.length);
{{< /code >}}

### 2 Dimensional Arrays
{{< code lang="js" >}}
numberGrid = [ [1, 2], [3, 4] ];
numberGrid[0][1] = 99;

document.write(numberGrid[0][0] + "<br>");
document.write(numberGrid[0][1] + "<br>");
{{< /code >}}

### Array Functions
{{< code lang="js" >}}
friends = new Array();
friends.push("Oscar");
friends.push("Angela");
friends.push("Kevin");

// friends.pop();
document.write( friends + "<br>" );
document.write( friends.indexOf("Angela") + "<br>" );
document.write( friends.indexOf("Z") + "<br>" );
document.write( friends.reverse() + "<br>" );
document.write( friends.sort() + "<br>" );
{{< /code >}}

### Objects
{{< code lang="js" >}}
var student = {
     name: "Jim",
     major: "Business",
     age: 19,
     gpa: 2.5
};

student.name = "Andy"
document.write( student.name + "<br>" );
document.write( student.major + "<br>" );
document.write( student.gpa + "<br>" );
{{< /code >}}

### Functions
{{< code lang="js" >}}
var sum = addNumbers(4, 60);
document.write(sum);

function addNumbers(num1, num2){
     return num1 + num2;
}
{{< /code >}}

### Inline Event Listeners

https://www.w3schools.com/jsref/dom_obj_event.asp

{{< code lang="html" file="index.html">}}
<h1 id="myHeader" onclick="handleClick(this)">GOUP</h1>
<script src="script.js"></script>
{{< /code >}}

{{< code lang="js" file="script.js">}}
function handleClick(element){
     alert("Clicked " + element.id);
}
{{< /code >}}

### Programatic Event Listeners

https://www.w3schools.com/jsref/dom_obj_event.asp

{{< code lang="html" file="index.html">}}
<h1 id="myHeader">GOUP</h1>
<script src="script.js"></script>
{{< /code >}}

{{< code lang="js" file="script.js">}}
var header = document.getElementById("myHeader");

header.addEventListener("click", function(){
     alert("You clicked " + header.id);
});
{{< /code >}}

### If Statements
{{< code lang="js" >}}
var isStudent = false;
var isSmart = false;

if(isStudent && isSmart){
     document.write("You are a student");
} else if(isStudent && !isSmart){
     document.write("You are not a smart student");
} else {
     document.write("You are not a student and not smart");
}
document.write("<br>");

// >, <, >=, <=, !=, ==
if(1 > 3){
     document.write("number comparison was true");
}
document.write("<br>");

if("dog" != "dog"){
     document.write("string comparison was true");
}
{{< /code >}}

### Switch Statements
{{< code lang="js" >}}
var myGrade = "A";
switch(myGrade){
     case "A":
          document.write("You Pass");
          break;
     case "F":
          document.write("You fail");
          break;
     default:
          document.write("Invalid grade");
}
{{< /code >}}

### While Loops
{{< code lang="js" >}}
var index = 1;
while(index <= 5){
     document.write(index);
     index++;
}

index = 1;
do{
	document.write(index);
	index++;
}while(index <= 5);
{{< /code >}}

### For Loops
{{< code lang="js" >}}
for(var i = 0; i < 5; i++){
     document.write(i);
}

var luckyNums = [4, 8, 15, 16, 23, 42];
luckyNums.forEach(function(luckyNum){
     document.write(luckyNum + "<br>");
});
{{< /code >}}

### Exception Catching
{{< code lang="js" >}}
try{
     // throw "Something went wrong"
     var x = y + 9;
}catch(err){
     document.write(err)
}finally{
     // this code always gets executed
}
{{< /code >}}

### Classes and Objects
{{< code lang="js" >}}
class Book{
     constructor(title, author){
          this.title = title;
          this.author = author;
     }

     readBook(){
          document.write("Reading " + this.title + " by " + this.author);
     }
}

var book1 = new Book("Harry Potter", "JK Rowling");

document.write(book1.title + "<br>");
book1.readBook();
{{< /code >}}

### Getters and Setters
{{< code lang="js" >}}
class Book{
     constructor(title, author){
          this.title = title;
          this.author = author;
     }

     get title(){
          document.write("<p>getting</p>");
          return this._title;
     }

     set title(title){
          document.write("<p>setting </p>");
          this._title = title;
     }

     readBook(){
          document.write("Reading " + this.title + " by " + this.author);
     }
}

var book1 = new Book("Harry Potter", "JK Rowling");

document.write(book1.title + "<br>");
book1.readBook();
{{< /code >}}

### Inheritance
{{< code lang="js" >}}
class Chef{

     constructor(name, age){
          this.name = name;
          this.age = age;
     }

     makeChicken(){
          document.write("The chef makes chicken <br>");
     }

     makeSalad(){
          document.write("The chef makes salad <br>");
     }

     makeSpecialDish(){
          document.write("The chef makes a special dish <br>");
     }
}

class ItalianChef extends Chef{

     constructor(name, age, countryOfOrigin){
          super(name, age);
          this.countryOfOrigin = countryOfOrigin;
     }

     makePasta(){
          document.write("The chef makes pasta <br>");
     }

     // overridden
     makeSpecialDish(){
          document.write("The chef makes chicken parm <br>");
     }
}

var myChef = new Chef("Gordon Ramsay", 50);
myChef.makeChicken();

var myItalianChef = new ItalianChef("Massimo Bottura", 55, "Italy");
myItalianChef.makeChicken();
document.write(myItalianChef.age);
{{< /code >}}