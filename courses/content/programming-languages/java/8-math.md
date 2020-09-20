---
date: 2017-10-22T11:34:28-04:00
title: "Math"
seo_title: "Math | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers math in Java.
author: GOUP
image: math.png
video: C3aWV0cTfpY
url: /programming-languages/java/math/
weight: 8
code:
    a: |+
          System.out.println( 2 * 3 );       // Basic Arithmetic: +, -, /, *
          System.out.println( 10 % 3 );      // Modulus Op. : returns remainder of 10/3
          System.out.println( 1 + 2 * 3 );   // order of operations
          System.out.println(10 / 3.0);      // int's and doubles
---

{{% programming-language-articles/math lang="Java" code-lang="java" %}}

## Video Code

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