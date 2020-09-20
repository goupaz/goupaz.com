---
date: 2017-10-22T11:34:28-04:00
title: "Creating A Calculator"
seo_title: "Creating A Calculator | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers creating a calculator in Java.
author: GOUP
image: creating-a-calculator.png
video: 4oaFjESw50k
url: /programming-languages/java/creating-a-calculator/
weight: 10
---

## Code

{{< code lang="java" >}}
// import java.util.Scanner;
Scanner keyboardInput = new Scanner(System.in);

System.out.print("Enter num1: ");
int num1 = keyboardInput.nextDouble(); // .nextDouble(), .nextInt()
System.out.print("Enter num2: ");
int num2 = keyboardInput.nextDouble();
System.out.println(num1 + num2);
{{< /code >}}