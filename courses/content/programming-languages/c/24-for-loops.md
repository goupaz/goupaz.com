---
date: 2017-11-01T00:17:49-04:00
title: "For Loops"
seo_title: "For Loops | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers for loops in C.
author: GOUP
image: for-loops.png
video: 3CAFJ3jRIQ8
url: /programming-languages/c/for-loops/
weight: 24
code:
    a: |+
          int index = 1;
          while(index <= 5){
              printf("%d \n", index);
              index++;
          }
    b: |+
          for(int i = 0; i < 5; i++){
              printf("%d \n", i);
          }
---

{{% programming-language-articles/for-loops lang="C" code-lang="c" %}}
