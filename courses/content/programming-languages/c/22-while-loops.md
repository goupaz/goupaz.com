---
date: 2017-11-01T00:17:47-04:00
title: "While Loops"
seo_title: "While Loops | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers while loops in C.
author: GOUP
image: while-loops.png
video: DMoDZPNJ-ZQ
url: /programming-languages/c/while-loops/
weight: 22
code:
    a: |+
          int index = 1;
          while(index <= 5){
              printf("%d \n", index);
              index++;
          }
    b: |+
          index = 1;
          do{
              printf("%d \n", index);
              index++;
          }while(index <= 5);
---

{{% programming-language-articles/while-loops lang="C" code-lang="c" %}}
