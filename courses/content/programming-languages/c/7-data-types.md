---
date: 2017-11-01T00:17:35-04:00
title: "Data Types"
seo_title: "Data Types | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers data types in C.
author: GOUP
image: data-types.png
video: 9kMr0EsltqU
url: /programming-languages/c/data-types/
weight: 7
code:
    a: |+
          char testGrade = 'A';    // single 8-bit character.
          char name[] = "Mike";    // array of characters (string)

          // you can make them unsigned by adding "unsigned" prefix
          short age0 = 10;         // atleast 16-bits signed integer
          int age1 = 20;           // atleast 16-bits signed integer (not smaller than short)
          long age2 = 30;          // atleast 32-bits signed integer
          long long age3 = 40;     // atleast 64-bits signed integer

          float gpa0 = 2.5;        // single percision floating point
          double gpa1 = 3.5;       // double-precision floating point
          long double gpa2 = 3.5;  // extended-precision floating point

          // boolean
          int isTall;              // 0 if false, non-zero if true
          isTall = 1;

          testGrade = 'F';

          printf("%s, your grade is %c \n", name, testGrade);
---

{{% programming-language-articles/data-types lang="C" code-lang="c" %}}
