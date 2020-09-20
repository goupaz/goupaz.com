---
date: 2017-10-22T11:34:30-04:00
title: "Try Catch"
seo_title: "Try Catch | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers try catch in Java.
author: GOUP
image: try-catch.png
video: JTjeGpSUL2M
url: /programming-languages/java/try-catch/
weight: 25
---

## Code

{{< code lang="java" >}}
try{
     int division = 10/0;
}catch(ArithmeticException e){
     System.out.println(e);
}catch(Exception e){
     // Not best practice to use general Exception
}

// throws exception
throw new ArithmeticException("can't add numbers");
{{< /code >}}