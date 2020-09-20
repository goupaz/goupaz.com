---
date: 2017-11-07T01:21:27-05:00
title: "Getters And Setters"
seo_title: "Getters And Setters | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers getters and setters in C++.
rating: GOUP
image: getters-and-setters.png
video: vFIxFMNNejA
url: /programming-languages/c++/getters-and-setters/
weight: 30
---

## Code

{{< code lang="cpp" >}}
class Movie{
     private:
          string title;
     public:
          string rating;

          Book(string title, string rating){
               this->title = title;
               this->setRating(rating);
          }

          string getRating(){
               return this->rating;
          }
          void setRating(string rating){
               if(rating == "G" || rating == "PG" || rating == "PG-13" || rating == "R" || rating == "NR" || ){
                    this->rating = rating;
               } else {
                    this->rating = "NR";
               }     
          }
};
{{< /code >}}