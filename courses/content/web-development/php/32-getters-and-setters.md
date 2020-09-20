---
date: 2017-11-15T17:52:39-05:00
title: "Getters And Setters"
seo_title: "Getters And Setters | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers getters and setters in PHP.
rating: GOUP
image: getters-and-setters.png
video: oV0Sk3OJQvM
url: /web-development/php/getters-and-setters/
weight: 32
---

## Code

{{< code lang="php" >}}
class Movie{
     public $title;
     private $rating;

     function __construct($title, $rating){
          $this->title = $title;
          $this->setRating($rating);
     }

     function getRating(){
          return $this->rating;
     }
     function setRating($rating){
          if($rating == "G" || $rating == "PG" || $rating == "PG-13" || $rating == "R" || $rating == "NR"){
               $this->rating = $rating;
          } else {
               $this->rating = "NR";
          }
     }
};
{{< /code >}}