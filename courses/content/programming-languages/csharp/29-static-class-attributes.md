---
date: 2017-11-08T18:34:48-05:00
title: "Static Class Attributes"
seo_title: "Static Class Attributes | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers static class attributes in C#.
author: GOUP
image: static-class-attributes.png
video: u2BhBxM5gqk
url: /programming-languages/csharp/static-class-attributes/
weight: 29
---
## Code

{{< code lang="csharp" >}}
public class Song{
     public string title;
     public string artist;
     public static int songCount = 0;

     public Song(string title, string artist){
          this.title = title;
          this.artist = artist;
          songCount++;
     }
}

public class App
{
     public static void Main(string[] args)
     {
          Song song1 = new Song("Holiday", "Green Day");

          Console.WriteLine(Song.songCount)
     }
}
{{< /code >}}