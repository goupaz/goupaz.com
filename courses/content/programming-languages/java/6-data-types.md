---
date: 2017-10-22T11:34:28-04:00
title: "Data Types"
seo_title: "Data Types | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers data types in Java.
author: GOUP
image: data-types.png
video: BRtlEMYW0FU
url: /programming-languages/java/data-types/
weight: 6
code:
    a: |+
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
---

{{% programming-language-articles/data-types lang="Java" code-lang="java" %}}
