---
date: 2017-10-22T11:34:29-04:00
title: "Better Calculator"
seo_title: "Better Calculator | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers better calculator in Java.
author: GOUP
image: better-calculator.png
video: 3p5dslR8wK4
url: /programming-languages/java/better-calculator/
weight: 17
---

## Code

{{< code lang="java" >}}
// import java.util.Scanner;
Scanner keyboardInput = new Scanner(System.in);

System.out.print("Enter num1: ");
int num1 = keyboardInput.nextDouble(); // .nextDouble(), .nextInt()

System.out.print("Enter Operator: ");
String op = keyboardInput.nextLine();

System.out.print("Enter num2: ");
int num2 = keyboardInput.nextDouble();

if(op.equals("+")){
     System.out.println(num1 + num2);
} else if(op.equals("-")){
     System.out.println(num1 - num2);
} else if(op.equals("/")){
     System.out.println(num1 / num2);
} else if(op.equals("*")){
     System.out.println(num1 * num2);
} else {
     System.out.println("Invalid Operator");
}

System.out.println(num1 + num2);

{{< /code >}}