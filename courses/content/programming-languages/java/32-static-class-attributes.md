---
date: 2017-10-22T11:34:31-04:00
title: "Static Class Attributes"
seo_title: "Static Class Attributes | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers static class attributes in Java.
author: GOUP
image: static-class-attributes.png
video: wyuX7uKjABE
url: /programming-languages/java/static-class-attributes/
weight: 32
---

## Code

{{< code lang="java" >}}
class Song{
     public String title;
     public String artist;
     public static int songCount = 0;

     public Song(String title, String artist){
          this.title = title;
          this.artist = artist;
          songCount++;
     }
}

public class App{
     public static void main(String [] args){
          Song mySong = new Song("Holiday", "Green Day");
          System.out.println(Song.songCount);
     }
}


{{< /code >}}