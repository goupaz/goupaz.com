---
date: 2017-10-22T11:34:29-04:00
title: "Return"
seo_title: "Return | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers return in Java.
author: GOUP
image: return.png
video: tOHJmm_SsAM
url: /programming-languages/java/return/
weight: 14
---

## Code

{{< code lang="java" >}}
public static void main(String [] args){
     int sum = addNumbers(4, 60);
     System.out.println(sum);
}

public static int addNumbers(int num1, int num2){
     return num1 + num2;
}

{{< /code >}}