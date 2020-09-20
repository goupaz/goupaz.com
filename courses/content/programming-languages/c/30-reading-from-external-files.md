---
date: 2017-11-01T00:17:54-04:00
title: "Reading From External Files"
seo_title: "Reading From External Files | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers reading from external files in C.
author: GOUP
image: reading-from-external-files.png
video: aiJj4mLS9oI
url: /programming-languages/c/reading-from-external-files/
weight: 30
---

## Code

{{< code lang="c" >}}
char line[255];
FILE * fpointer = fopen("employees.txt", "r");

fgets(line, 255, fpointer);
printf("%s", line);

fclose(fpointer);
{{< /code >}}