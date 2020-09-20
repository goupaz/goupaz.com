---
date: 2017-11-15T17:52:37-05:00
title: "In One Video"
seo_title: "In One Video | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers PHP in one video.
author: GOUP
image: getting-input-from-users.png
video: pWBRjQBWuYA
url: /web-development/php/in-one-video/
weight: 34
---

## PHP Overview

Php is a server side scripting language, designed primarily for use on web servers,
but also used as a general purpose programming language. Php was created in the
1990s by Rasmus Lerdorf, and is fully Object Oriented.

The most common use case for PHP is in web development. Because PHP can be written along
side HTML, and also because it integrates so well with HTML and other web technologies,
you'll often find it running on a web server.

PHP began as a set of rudimentary C programs designed to help it's founder
maintain his website's homepage. But soon snowballed into a fully fledged language
by 1997.

### How PHP is Run

Generally PHP code is run using an interpreter which sits on the web sever, once
the PHP code is executed a finished webpage is then sent to the user. This process
allows for the creation of dynamic web pages, meaning aspects of the website can
change dynamically depending on the result of executing the PHP code.

The most popular PHP interpreter is completly free and can be deployed on most
webservers and operating systems. Because it's free and portable PHP has become
a staple in the web development world.

PHP utilizes a garbage collector and it's syntax is based on a C, C++ style.

### Choosing an IDE

Many developers choose to write PHP using a basic text editor, generally PHP will
be written in the same enviornment as the HTML and front end technologies that it
interacts with. Although several special IDE's have been developed, some of the most
popular include NetBeans, PHP Storm and Adobe DreamWeaver.

## Code

### Printing
{{< code lang="php" >}}
echo "<h1>Hello World</h1>");
print "<hr/>";                           // returns 1
echo  "<p>This is a php tutorial</p>";
{{< /code >}}

### Variables and Data Types
{{< code lang="php" >}}
/*
Names are case-sensitive and must start with '$' then:
   letters, _
After, may include
   letters, numbers, _
Convention says
   Start with a lowercase word, then additional words are capitilized
   ex. myFirstVariable
*/
$name = "Mike";    // Strings
$age = 30;         // Integer
$gpa = 3.5;        // Decimal
$isTall = true;    // Boolean -> true/false

$name = "John";

echo  "Your name is $name <br>";
{{< /code >}}

### Casting and Converting
{{< code lang="php" >}}
echo ((int)3.14)."<br>";
echo ((float)3)."<br>";
echo ((int)"80" + (float)"60.5")."<br>";
echo  intval("80") + floatval("60.5");
{{< /code >}}

### Strings
{{< code lang="php" >}}
$greeting = "Hello";
//indexes:   01234

echo  strlen($greeting)."<br>";
echo  $greeting[0]."<br>";
echo  $greeting[-1]."<br>";
echo  str_replace("l", "Z", $greeting)."<br>";
echo  strchr($greeting, "ll")."<br>";     
{{< /code >}}

### Numbers
{{< code lang="php" >}}
echo (2 * 3)."<br>";            // Basic Arithmetic: +, -, /, *
echo (2**3)."<br>";             // Basic Arithmetic: +, -, /, *
echo (10 % 3)."<br>";           // Modulus Op. : returns remainder of 10/3
echo (1 + 2 * 3)."<br>";        // order of operations
echo (10 / 3.0)."<br><br>";     // int's and doubles


$num = 10;
$num += 100;                    // +=, -=, /=, *=
echo $num."<br>";

$num++;
echo $num."<br><br>";

// useful math methods
echo max(2, 3)."<br>";
echo sqrt(144)."<br>";
echo round(2.7)."<br>";

{{< /code >}}

### User Input GET
{{< code lang="php" >}}
<form action="App.php" method="GET">
     Username: <input type="text" name="username">
</form>

<?php
echo $_GET["username"];
echo "</br>";
$age = $_GET["age"];
echo $age;
?>
{{< /code >}}

### User Input POST
{{< code lang="php" >}}
<form action="App.php" method="POST">
     Username: <input type="text" name="username">
</form>

<?php
echo $_POST["username"];
?>
{{< /code >}}

### Arrays
{{< code lang="php" >}}
// $lucky_numbers = [];
// $lucky_numbers = array(4, 8, "fifteen", 16, 23, 42.0);
$lucky_numbers = [4, 8, "fifteen", 16, 23, 42.0];
//      indexes  0  1       2      3   4   5

$lucky_numbers[0] = 90;
echo $lucky_numbers[0]."<br>";
echo $lucky_numbers[1]."<br>";
echo count($lucky_numbers)."<br>";
{{< /code >}}

### 2 Dimensional Arrays
{{< code lang="php" >}}
$number_grid = [ [1, 2], [3, 4] ];
$number_grid[0][1] = 99;

echo $number_grid[0][0]."<br>";
echo $number_grid[0][1]."<br>";
{{< /code >}}

### Array Functions
{{< code lang="php" >}}
$friends = [];
array_push($friends, "Oscar", "Angela");
array_push($friends, "Kevin");

// array_pop($friends);
echo "$friends[0], $friends[1], $friends[2] <br>";
sort($friends);
echo "$friends[0], $friends[1], $friends[2] <br>";
echo in_array("Oscar", $friends);
{{< /code >}}

### Associative Arrays
{{< code lang="php" >}}
test_grades = {
    "Andy" => "B+",
    "Stanley" => "C",
    "Ryan" => "A",
    3 => 95.2
}
echo  test_grades["Andy"]."<br>";
echo  test_grades["Ryan"]."<br>";
echo  test_grades[3]."<br>";
{{< /code >}}

### Functions
{{< code lang="php" >}}
function addNumbers($num1, $num2=99){
     return $num1 + $num2;
}

$sum = addNumbers(4, 3);
echo $sum;
{{< /code >}}

### If Statements
{{< code lang="php" >}}
$isStudent = false;
$isSmart = false;

if($isStudent && $isSmart){
     echo "You are a student";
} elseif($isStudent && !$isSmart){
     echo "You are not a smart student";
} else {
     echo "You are not a student and not smart";
}
echo "<br>";

// >, <, >=, <=, !=, ==
if(1 > 3){
     echo "number comparison was true";
}
echo "<br>";

if("dog" == "cat"){
   echo "string comparison was true";
}
{{< /code >}}

### Switch Statements
{{< code lang="php" >}}
$myGrade = "A";
switch($myGrade){
     case "A":
          echo "You Pass";
          break;
     case "F":
          echo "You fail";
          break;
     default:
          echo "Invalid grade";
}
{{< /code >}}

### While Loops
{{< code lang="php" >}}
$index = 1;
while ($index <= 5){
     echo $index;
     $index += 1;
}

$index = 1;
do{
     echo $index;
     $index += 1;
}while ($index <= 5);
{{< /code >}}

### For Loops
{{< code lang="php" >}}
for($i = 0; $i < 5; $i++){
     echo $i;
}

$luckyNums = [4, 8, 15, 16, 23, 42];
foreach($luckyNums as $luckyNum){
     echo $luckyNum."<br>";
}
{{< /code >}}

### Exception Catching
{{< code lang="php" >}}
try{
     throw new Exception('Something bad happened');
} catch(Exception $e){
     echo $e->getMessage();
} finally{
     echo "<br> This code gets executed no matter what";
}
{{< /code >}}

### Classes and Objects
{{< code lang="php" >}}
class Book{
     var $title;
     public $author;
     public static $staticAttribute = "My Static Attribute";

     function readBook(){
          echo "Reading $this->title by $this->author";
     }
};


$book1 = new Book;
$book1->title = "Harry Potter";
$book1->author = "JK Rowling";

echo $book1->title."<br>";
echo Book::$staticAttribute."<br>";
$book1->readBook();
{{< /code >}}

### Constructors
{{< code lang="php" >}}
class Book{
     var $title;
     public $author;

     function __construct($title, $author){
          $this->title = $title;
          $this->author = $author;
     }

     function readBook(){
          echo "Reading $this->title by $this->author";
     }
};


$book1 = new Book("Harry Potter", "JK Rowling");
// $book1->title = "Half-Blood Prince";

echo $book1->title."<br>";
{{< /code >}}

### Getters and Setters
{{< code lang="php" >}}
class Book{
     private $title;
     public $author;

     function __construct($title, $author){
          $this->setTitle($title);
          $this->author = $author;
     }

     function getTitle(){
          return $this->title;
     }
     function setTitle($title){
          $this->title = $title;
     }

     function readBook(){
          echo "Reading $this->title by $this->author";
     }
};


$book1 = new Book("Harry Potter", "JK Rowling");
$book1->setTitle("Half-Blood Prince");

echo $book1->getTitle();
{{< /code >}}

### Inheritance
{{< code lang="php" >}}
class Chef{

     public $name;
     public $age;

     function __construct($name, $age){
          $this->name = $name;
          $this->age = $age;
     }

     function makeChicken(){
          echo "The chef makes chicken";
     }
     function makeSalad(){
          echo "The chef makes salad";
     }
     function makeSpecialDish(){
          echo "The chef makes bbq ribs";
     }
};
class ItalianChef extends Chef{

     public $countryOfOrigin;

     function __construct($name, $age, $countryOfOrigin){
          $this->countryOfOrigin = $countryOfOrigin;
          parent::__construct($name, $age);
     }

     function makePasta(){
          echo "The chef makes pasta";
     }
     function makeSpecialDish(){
          echo "The chef makes chicken parm";
     }
};


$chef = new Chef("Gordon Ramsay", 50);
$chef->makeChicken();
echo "<br>";
$italianChef = new ItalianChef("Massimo Bottura", 55, "Italy");
$italianChef->makeChicken();
echo "<br> $italianChef->countryOfOrigin";
{{< /code >}}

### Abstract Classes and Methods
{{< code lang="php" >}}
abstract class Vehicle{
     public abstract function move();
     public function getDescription(){
          echo "Vehicles are used for transportation";
     }
}

class Bicycle extends Vehicle{
     public function move(){
          echo "The bicycle pedals forward";
     }
}

class Plane extends Vehicle{

     public function move(){
          echo "The plane flys through the sky";
     }
}


$plane = new Plane();
$plane->move();
echo "<br>";
$plane->getDescription();
{{< /code >}}

### Interface Inheritance
{{< code lang="php" >}}
interface Animal{
     public function speak();
}

class Cat implements Animal{
     public function speak(){
          echo "Meow Meow <br>";
     }
}

class Dog implements Animal{
     public function speak(){
          echo "Woof Woof <br>";
     }
}


$animals = [
     new Dog(),
     new Cat()
];

foreach($animals as $animal){
     $animal->speak();
}
{{< /code >}}

