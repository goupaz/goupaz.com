---
date: 2017-11-01T00:17:52-04:00
title: "Writing To External Files"
seo_title: "Writing To External Files | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers writing to external files in C.
author: GOUP
image: writing-to-external-files.png
video: TFVJNKax_Bs
url: /programming-languages/c/writing-to-external-files/
weight: 29
---

## Code

{{< code lang="c" >}}
FILE * fpointer = fopen("employees.txt", "w"); // also try "a" for append

fprint(fpointer, "employee");

fclose(fpointer);
{{< /code >}}