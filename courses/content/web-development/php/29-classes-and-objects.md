---
date: 2017-11-15T17:52:38-05:00
title: "Classes And Objects"
seo_title: "Classes And Objects | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers classes and objects in PHP.
author: GOUP
image: classes-and-objects.png
video: Y-EnZys5WBk
url: /web-development/php/classes-and-objects/
weight: 29
---

## Code

{{< code lang="php" >}}
class Book{
     var $title;
     public $author;
};


$book1 = new Book;
$book1->title = "Harry Potter";
$book1->author = "JK Rowling";

echo $book1->title."<br>";
{{< /code >}}