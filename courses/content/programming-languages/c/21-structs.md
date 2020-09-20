---
date: 2017-11-01T00:17:46-04:00
title: "Structs"
seo_title: "Structs | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers structs in C.
author: GOUP
image: structs.png
video: ucbEjsXfyh4
url: /programming-languages/c/structs/
weight: 21
---

## Code

{{< code lang="c" >}}

struct Book{
     char title[100];
     char author[100];
}

int main(){

      struct Book book1;
      book1.numPages = 600;
      strcpy( book1.title, "Harry Potter" );
      strcpy( book1.author, "JK Rowling");

      printf("%s \n", book1.title);

      return 0;
}
{{< /code >}}