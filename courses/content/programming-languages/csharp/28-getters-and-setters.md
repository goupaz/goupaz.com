---
date: 2017-11-08T18:34:48-05:00
title: "Getters And Setters"
seo_title: "Getters And Setters | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers getters and setters in C#.
author: GOUP
image: getters-and-setters.png
video: EbW-1fPhXQE
url: /programming-languages/csharp/getters-and-setters/
weight: 28
---
## Code

{{< code lang="csharp" >}}
public class Movie{
     private String title;
     private String rating;

     public Movie(String title, String rating){
          this.title = title;
          this.setRating(rating);
     }

     public String getRating(){
          return this.rating;
     }
     public void setRating(String rating){
          if (rating == "G" || rating == "PG" || rating == "PG-13" || rating == "R" || rating == "NR"){
               this.rating = rating;
          } else {
               this.rating = "NR";
          }
     }
}
{{< /code >}}