---
date: 2017-11-15T17:52:39-05:00
title: "Object Methods"
seo_title: "Object Methods | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers object methods in PHP.
author: GOUP
image: object-methods.png
video: NjyCERHbxRY
url: /web-development/php/object-methods/
weight: 31
---

## Code

{{< code lang="php" >}}
class Student{
     public $name;
     public $gpa;

     function __construct($name, $gpa){
          $this->name = $name;
          $this->gpa = $gpa;
     }

     function hasHonors(){
          if($this->gpa >= 3.5){
               return true;
          }
          return false;
     }
};
{{< /code >}}