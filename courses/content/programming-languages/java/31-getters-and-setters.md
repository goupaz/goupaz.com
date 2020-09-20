---
date: 2017-10-22T11:34:30-04:00
title: "Getters And Setters"
seo_title: "Getters And Setters | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers getters and setters in Java.
author: GOUP
image: getters-and-setters.png
video: UoM7SqWIrtA
url: /programming-languages/java/getters-and-setters/
weight: 31
---

## Code

{{< code lang="java" >}}

public class Movie{
     public String title;
     private String rating;
     public int duration;

     public Movie(String title, String rating, int duration){
          this.title = title;
          this.setRating(rating);
          this.duration = duration;
     }

     public String getRating(){
          return this.rating;
     }

     public void setRating(String rating){
          if(rating.equals("G") || rating.equals("PG") || rating.equals("PG-13") || rating.equals("R") || rating.equals("NR")){
               this.rating = rating;
          } else {
               this.rating = "NR";
          }
     }
}

{{< /code >}}