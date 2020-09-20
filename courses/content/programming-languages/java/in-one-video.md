---
date: 2017-10-22T11:34:28-04:00
title: "In One Video"
seo_title: "In One Video | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers the Java programming language in one video.
author: GOUP
image: creating-a-calculator.png
video: kJ0PKUMWnQI
url: /programming-languages/java/in-one-video/
weight: 39
---
## Java Overview

Java is a general purpose, staticly typed, object oriented programming language
that was founded in June 1991. The project was initiated by three
developers - James Gosling, Mike Sheridan, and Patrick Naughton, but
was officially released by Sun Microsystems in 1995.

Java's tagline is "Write once, run anywhere", and the language was
founded on 5 principles

1. It must be "simple, object-oriented, and familiar".
2. It must be "robust and secure".
3. It must be "architecture-neutral and portable".
4. It must execute with "high performance".
5. It must be "interpreted, threaded, and dynamic".

### How Java Runs

All java code is compiled down into java byte code which is then
run on the Java Virtual Machine (JVM). This ensures that java programs
can be run on virtually any combination of hardware and operating
system.

Java uses an automatic garbage collector to manage memory, and the
syntax of java is largly influenced by c & c++.

Java is perhaps best known for being the language in which android
apps are written, and also seves as the basis for several popular
frameworks including Spring and Hibernate. Java is also known for
having an extensive ecosystem, with libraries and API's to do just
about anything.

### Choosing an IDE

Many developers choose to write java using a specilized integrated
development enviornment. Three of the most popular are Eclipse,
NetBeans and IntelliJ.

## Code

### Printing
{{< code lang="java" >}}
System.out.println("Hello");
System.out.print("World");
System.out.println("!");
{{< /code >}}

### Variables and Data Types

{{< code lang="java" >}}
/*
 Names are case-sensitive and may begin with:
     letters, $, _
 After, may include
     letters, numbers, $, _
 Convention says
     Start with a lowercase word, then additional words are capitalized
     ex. myFirstVariable
*/
String name = "Mike";    // String's are objects not primitives
char testGrade = 'A';    // single 16-bit Unicode character.

byte age0 = 0;           // 8-bit signed two's complement integer
short age1 = 10;         // 16-bit signed two's complement integer.
int age2 = 20;           // 32-bit signed two's complement integer
long age3 = 30L;          // 64-bit optionally signed two's complement integer

float gpa0 = 2.5f;       // 32-bit floating point
double gpa1 = 3.5;       // double-precision 64-bit floating point

boolean isTall;          // 1 bit -> true/false
isTall = true;

name = "John";

System.out.println("Your name is " + name);
System.out.printf("Your name is %s \n", name);
/*
%f -> double or float
%d -> Integer
%s -> string
%c -> character
%b -> boolean
*/
{{< /code >}}

### Casting and Converting

{{< code lang="java" >}}
System.out.println( (int)3.14 );
System.out.println( (double)3 );

int intFromString = Integer.parseInt("50");
double doubleFromString = Double.parseDouble("50.99");

System.out.println(100 + intFromString);
System.out.println( 100 + doubleFromString );

{{< /code >}}

### Strings

{{< code lang="java" >}}
String greeting = "Hello";
//      indexes:   01234

System.out.println( greeting.length() );
System.out.println( greeting.charAt(0) );
System.out.println( greeting.indexOf("llo") );
System.out.println( greeting.indexOf("z") );
System.out.println( greeting.substring(2) );
System.out.println( greeting.substring(1, 3) );

{{< /code >}}

### Numbers

{{< code lang="java" >}}
System.out.println( 2 * 3 );       // Basic Arithmetic: +, -, /, *
System.out.println( 10 % 3 );      // Modulus Op. : returns remainder of 10/3
System.out.println( 1 + 2 * 3 );   // order of operations
System.out.println(10 / 3.0);      // int's and doubles


int num = 10;
num += 100; // +=, -=, /=, *=
System.out.println(num);

num++;
System.out.println(num);

// Math class has useful math methods
System.out.println( Math.pow(2, 3) );
System.out.println( Math.sqrt(144) );
System.out.println( Math.round(2.7) );
{{< /code >}}

### User Input

{{< code lang="java" >}}
// import java.util.Scanner;
Scanner keyboardInput = new Scanner(System.in);

System.out.print("Enter username: ");
String username = keyboardInput.nextLine(); // .nextDouble(), .nextInt()
System.out.println("Hello, " + username);

// System.out.println( keyboardInput.hasNextLine() ); // .hasNextDouble(), .hasNextInt()

{{< /code >}}

### Arrays

{{< code lang="java" >}}
// int [] luckyNumbers = new int[10];
int [] luckyNumbers = {4, 8, 15, 16, 23, 42};
//         indexes:    0  1  2   3   4   5

luckyNumbers[0] = 90;
System.out.println(luckyNumbers[0]);
System.out.println(luckyNumbers[1]);
System.out.println(luckyNumbers.length);

{{< /code >}}

### 2 Dimensional Arrays

{{< code lang="java" >}}
// int [][] numberGrid = new int[2][3];
int [][] numberGrid = { {1, 2}, {3, 4} };
numberGrid[0][1] = 99;

System.out.println(numberGrid[0][0]);
System.out.println(numberGrid[0][1]);

{{< /code >}}

### ArrayList

{{< code lang="java" >}}
ArrayList<String> friends = new ArrayList<String>();
friends.add("Oscar");
friends.add("Angela");
friends.add("Kevin");

// friends.remove("Oscar");
System.out.println( friends.toString() );
System.out.println( friends.get(0) );
System.out.println( friends.contains("Oscar") );
System.out.println( friends.size() );

{{< /code >}}

### Methods

{{< code lang="java" >}}
public static void main(String [] args){
     int sum = addNumbers(4, 60);
     System.out.println(sum);
}

public static int addNumbers(int num1, int num2){
     return num1 + num2;
}
{{< /code >}}

### If Statements

{{< code lang="java" >}}
boolean isStudent = false;
boolean isSmart = false;

if(isStudent && isSmart){
     System.out.println("You are a student");
} else if(isStudent && !isSmart){
     System.out.println("You are not a smart student");
} else {
     System.out.println("You are not a student and not smart");
}

// >, <, >=, <=, !=, ==, String.equals()
if(1 > 3){
     System.out.println("number omparison was true");
}

if('a' > 'b'){
     System.out.println("character omparison was true");
}

if("dog".equals("cat")){
     System.out.println("string omparison was true");
}
{{< /code >}}

### Switch Statements

{{< code lang="java" >}}
char myGrade = 'A';
switch(myGrade){
     case 'A':
          System.out.println("You Pass");
          break;
     case 'F':
          System.out.println("You fail");
          break;
     default:
          System.out.println("Invalid grade");
}
{{< /code >}}

### While Loops

{{< code lang="java" >}}
int index = 1;
while(index <= 5){
     System.out.println(index);
     index++;
}

index = 1;
do{
     System.out.println(index);
     index++;
}while(index <= 5);
{{< /code >}}

### For Loops

{{< code lang="java" >}}
for(int i = 0; i < 5; i++){
     System.out.println(i);
}

int luckyNums[] = {4, 8, 15, 16, 23, 42};
for(int luckyNum : luckyNums){
     System.out.println(luckyNum);
}
{{< /code >}}

### Exception Catching

{{< code lang="java" >}}
try{
     int division = 10/0;
}catch(ArithmeticException e){
     System.out.println(e);
}catch(Exception e){
     // Not best practice to use general Exception
}

throw new ArithmeticException("can't add numbers");

{{< /code >}}

### Classes and Objects

{{< code lang="java" >}}
public class Book{
     public String title;
     public String author;
     public static String staticAttribute = "My Static Attribute";

     public void readBook(){
          System.out.println("Reading " + this.title + " by " + this.author);
     }
}

Book book1 = new Book();
book1.title = "Harry Potter";
book1.author = "JK Rowling";

book1.readBook();
System.out.println(book1.title);

Book book2 = new Book();
book2.title = "Lord of the Rings";
book2.author = "JRR Tolkien";

book2.readBook();
System.out.println(book2.title);
System.out.println(Book.staticAttribute)

{{< /code >}}

### Constructors

{{< code lang="java" >}}
public class Book{
     public String title;
     public String author;

     public Book(){
          this.title = "no title";
          this.author = "no author";
     }

     public Book(String title, String author){
          this.title = title;
          this.author = author;
     }

     public void readBook(){
          System.out.println("Reading " + this.title + " by " + this.author);
     }
}

Book book1 = new Book("Harry Potter", "JK Rowling");
System.out.println(book1.title);

Book book2 = new Book("Lord of the Rings", "JRR Tolkien");
System.out.println(book2.title);
{{< /code >}}

### Getters and Setters

{{< code lang="java" >}}

 public class Book
 {
     private String title;
     private String author;

     public Book()
     {
         this.title = "no title";
         this.author = "no author";
     }

     public Book(String title, String author)
     {
         this.Title = title;
         this.Author = author;
     }

     public string Title
     {
         get { return this.title; }
         set { this.title = value; }

     }
     public string Author
     {
         get { return this.author; }
         set { this.author = value; }

     }
 }

Book book1 = new Book("Harry Potter", "JK Rowling");
Console.WriteLine(book1.Title);

Book book2 = new Book("Lord of the Rings", "JRR Tolkien");
Console.WriteLine(book1.Author);

{{< /code >}}

### Inheritance
{{< code lang="java" >}}
class Chef{

     public String name;
     public int age;

     public Chef(String name, int age){
          this.name = name;
          this.age = age;
     }


     public void makeChicken(){
          System.out.println("The chef makes chicken");
     }

     public void makeSalad(){
          System.out.println("The chef makes salad");
     }

     public void makeSpecialDish(){
          System.out.println("The chef makes a special dish");
     }
}

class ItalianChef extends Chef{

     public String countryOfOrigin;

     public ItalianChef(String name, int age, String countryOfOrigin){
          super(name, age);
          this.countryOfOrigin = countryOfOrigin;
     }

     public void makePasta(){
          System.out.println("The chef makes pasta");
     }

     @Override
     public void makeSpecialDish(){
          System.out.println("The chef makes chicken parm");
     }
}

Chef myChef = new Chef("Gordon Ramsay", 50);
myChef.makeChicken();

ItalianChef myItalianChef = new ItalianChef("Massimo Bottura", 55, "Italy");
myItalianChef.makeChicken();
System.out.println(myItalianChef.age);

{{< /code >}}

### Abstract Classes and Methods
{{< code lang="java" >}}
abstract class Vehicle{
     public abstract void move();
     public void getDescription(){
          System.out.println("Vehicles are used for transportation");
     }
}

class Bicycle extends Vehicle{
     @Override
     public void move(){
          System.out.println("The bicycle pedals forward");
     }
}

class Plane extends Vehicle{
     @Override
     public void move(){
          System.out.println("The plane flys through the sky");
     }
}

{{< /code >}}

### Interface Inheritance
{{< code lang="java" >}}
interface Animal{
     public void speak();
}

class Cat implements Animal{
     @Override
     public void speak(){
          System.out.println("Meow Meow");
     }
}

class Dog implements Animal{
     @Override
     public void speak(){
          System.out.println("Woof Woof");
     }
}


Animal [] animals = {
     new Dog(),
     new Cat()
};
for(Animal animal : animals){
     animal.speak();
}
{{< /code >}}

