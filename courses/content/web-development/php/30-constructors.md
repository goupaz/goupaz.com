---
date: 2017-11-15T17:52:39-05:00
title: "Constructors"
seo_title: "Constructors | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers constructors in PHP.
author: GOUP
image: constructors.png
video: 976zsZc7Cv0
url: /web-development/php/constructors/
weight: 30
---

## Code

{{< code lang="php" >}}
class Book{
     var $title;
     public $author;

     function __construct($title, $author){
          $this->title = $title;
          $this->author = $author;
     }
};

$book1 = new Book("Harry Potter", "JK Rowling");
// $book1->title = "Half-Blood Prince";

echo $book1->title."<br>";
{{< /code >}}