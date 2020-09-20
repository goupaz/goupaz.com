---
date: 2017-11-15T17:52:37-05:00
title: "Functions"
seo_title: "Functions | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers functions in PHP.
author: GOUP
image: functions.png
video: lBPa92h2AqE
url: /web-development/php/functions/
weight: 18
code:
    a: |+
          function sayHi(){
              echo "Hello";
          }
    b: |+
          function sayHi(){
              echo "Hello";
          }

          sayHi()
    c: |+
          function sayHi($name){
              echo "Hello $name";
          }
    d: |+
          function sayHi($name){
              echo "Hello $name";
          }

          sayHi("Mike")
    e: |+
          function sayHi($name, $age){
              echo "Hello $name you are $age";
          }

          sayHi("Mike", 24)
---

{{% programming-language-articles/methods lang="PHP" code-lang="php" term="Function" %}}
