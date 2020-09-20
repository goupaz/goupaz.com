---
date: 2017-10-22T11:34:29-04:00
title: "For Loops"
seo_title: "For Loops | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers for loops in Java.
author: GOUP
image: for-loops.png
video: 2Z90SJZ4N88
url: /programming-languages/java/for-loops/
weight: 21
code:
    a: |+
          int index = 1;
          while(index <= 5){
              System.out.println(index);
              index++;
          }
    b: |+
          for(int i = 0; i < 5; i++){
              System.out.println(i);
          }
---

{{% programming-language-articles/for-loops lang="Java" code-lang="java" %}}

## Video Code

{{< code lang="java" >}}
for(int i = 0; i < 5; i++){
     System.out.println(i);
}

int luckyNums[] = {4, 8, 15, 16, 23, 42};
for(int luckyNum : luckyNums){
     System.out.println(luckyNum);
}

{{< /code >}}