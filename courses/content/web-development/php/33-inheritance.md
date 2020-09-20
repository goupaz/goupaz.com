---
date: 2017-11-15T17:52:39-05:00
title: "Inheritance"
seo_title: "Inheritance | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers inheritance in PHP.
author: GOUP
image: inheritance.png
video: 5JG3eGaqT-c
url: /web-development/php/inheritance/
weight: 33
---

## Code

{{< code lang="php" >}}
class Chef{
     function makeChicken(){
          echo "The chef makes chicken";
     }
     function makeSalad(){
          echo "The chef makes salad";
     }
     function makeSpecialDish(){
          echo "The chef makes bbq ribs";
     }
};

class ItalianChef extends Chef{
     function makePasta(){
          echo "The chef makes pasta";
     }
     function makeSpecialDish(){
          echo "The chef makes chicken parm";
     }
};


$chef = new Chef();
$chef->makeChicken();
echo "<br>";
$italianChef = new ItalianChef();
$italianChef->makeChicken();
{{< /code >}}