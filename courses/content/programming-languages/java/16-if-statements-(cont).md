---
date: 2017-10-22T11:34:29-04:00
title: "If Statements (Cont)"
seo_title: "If Statements (Cont) | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers if statements (cont) in Java.
author: GOUP
image: if-statements-(cont).png
video: Ocd0_7Wql8I
url: /programming-languages/java/if-statements-cont/
weight: 16
---

## Code

{{< code lang="java" >}}
boolean isStudent = false;
boolean isSmart = false;

if(isStudent && isSmart){
     System.out.println("You are a student");
} else if(isStudent && !isSmart){
     System.out.println("You are not a smart student");
} else {
     System.out.println("You are not a student and not smart");
}

// >, <, >=, <=, !=, ==, String.equals()
if(1 > 3){
     System.out.println("number comparison was true");
}

if('a' > 'b'){
     System.out.println("character comparison was true");
}

if("dog".equals("cat")){
     System.out.println("string comparison was true");
}

{{< /code >}}