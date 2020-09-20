---
date: 2017-10-22T11:34:29-04:00
title: "Exponent Function"
seo_title: "Exponent Function | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers exponent function in Java.
author: GOUP
image: exponent-function.png
video: RH9xRe7lwfg
url: /programming-languages/java/exponent-function/
weight: 22
---

## Code

{{< code lang="java" >}}
public static int pow(int baseNum, int powNum){
     int result = 1;
     for(int i = 0; i < powNum; i++){
          result = result * baseNum;
     }
     return result;
}

{{< /code >}}