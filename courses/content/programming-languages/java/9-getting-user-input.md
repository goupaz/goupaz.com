---
date: 2017-10-22T11:34:28-04:00
title: "Getting User Input"
seo_title: "Getting User Input | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers getting user input in Java.
author: GOUP
image: getting-user-input.png
video: sizFeSlGMt4
url: /programming-languages/java/getting-user-input/
weight: 9
code:
    a: |+
          import java.util.Scanner;
          Scanner keyboardInput = new Scanner(System.in);

          System.out.print("Enter username: ");
          String username = keyboardInput.nextLine(); // .nextDouble(), .nextInt()
          System.out.println("Hello, " + username);
---

{{% programming-language-articles/user-input lang="Java" code-lang="java" %}}
