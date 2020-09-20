---
date: 2017-10-22T11:34:28-04:00
title: "Building A Mad Libs Game"
seo_title: "Building A Mad Libs Game | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a mad libs game in Java.
author: GOUP
image: building-a-mad-libs-game.png
video: Jbuy0HnR808
url: /programming-languages/java/building-a-mad-libs-game/
weight: 11
---

## Code

{{< code lang="java" >}}
// import java.util.Scanner;
Scanner keyboardInput = new Scanner(System.in);

System.out.print("Enter color: ");
String color = keyboardInput.nextLine();

System.out.print("Enter plural noun: ");
String pluralNoun = keyboardInput.nextLine();

System.out.print("Enter celebrity: ");
String celebrity = keyboardInput.nextLine();

System.out.println("Roses are " + color);
System.out.println(pluralNoun + " are blue");
System.out.println("I love " + celebrity);

{{< /code >}}