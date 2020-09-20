---
date: 2017-11-08T18:34:45-05:00
title: "Methods"
seo_title: "Methods | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers methods in C#.
author: GOUP
image: methods.png
video: MkDroqxS8LY
url: /programming-languages/csharp/methods/
weight: 12
code:
    a: |+
          public static void Main(string [] args){
          }

          public static void sayHi(){
              Console.WriteLine("Hello");
          }
    b: |+
          public static void Main(string [] args){
            sayHi();
          }
    c: |+
          public static void sayHi(string name){
              Console.WriteLine("Hello " + name);
          }
    d: |+
          public static void Main(string [] args){
            sayHi("Mike")
          }
    e: |+
          public static void Main(string [] args){
            sayHi("Mike", 24)
          }

          public static void sayHi(){
              Console.WriteLine("Hello " + name + " you are " + age);
          }
---

{{% programming-language-articles/methods lang="C#" code-lang="cs" term="Method" %}}
