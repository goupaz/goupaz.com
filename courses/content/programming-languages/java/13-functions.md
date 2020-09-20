---
date: 2017-10-22T11:34:29-04:00
title: "Methods"
seo_title: "Methods | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers methods in Java.
author: GOUP
image: functions.png
video: Cx_ut1msINQ
url: /programming-languages/java/functions/
weight: 13
code:
    a: |+
          public static void main(String [] args){
          }

          public static void sayHi(){
              System.out.println("Hello");
          }
    b: |+
          public static void main(String [] args){
            sayHi();
          }
    c: |+
          public static void sayHi(String name){
              System.out.println("Hello " + name);
          }
    d: |+
          public static void main(String [] args){
            sayHi("Mike")
          }
    e: |+
          public static void main(String [] args){
            sayHi("Mike", 24)
          }

          public static void sayHi(String name, int age){
              System.out.println("Hello " + name + " you are " + age);
          }
---

{{% programming-language-articles/methods lang="Java" code-lang="java" term="Method" %}}
