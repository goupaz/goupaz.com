---
date: 2017-10-22T11:23:34-04:00
title: "Functions"
seo_title: "Functions | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers functions in Javascript.
author: GOUP
image: functions.png
video: MMC8FUggB7s
url: /web-development/javascript/functions/
weight: 12
code:
    a: |+
          function sayHi(){
              document.write("Hello");
          }
    b: |+
          function sayHi(){
              document.write("Hello");
          }

          sayHi()
    c: |+
          function sayHi(name){
              document.write("Hello " + name);
          }
    d: |+
          function sayHi(name){
              document.write("Hello " + name);
          }

          sayHi("Mike")
    e: |+
          function sayHi(name, age){
              document.write("Hello " + name + " you are " + age);
          }
          
          sayHi("Mike", 24)
---

{{% programming-language-articles/methods lang="JavaScript" code-lang="js" term="Function" %}}


## Code

{{< code lang="js" >}}
var sum = addNumbers(4, 60);
document.write(sum);

function addNumbers(num1, num2){
     return num1 + num2;
}
{{< /code >}}