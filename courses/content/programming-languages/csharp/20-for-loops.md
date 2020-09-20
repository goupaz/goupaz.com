---
date: 2017-11-08T18:34:46-05:00
title: "For Loops"
seo_title: "For Loops | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers for loops in C#.
author: GOUP
image: for-loops.png
video: ad38jqt7XDs
url: /programming-languages/csharp/for-loops/
weight: 20
code:
    a: |+
          int index = 1;
          while(index <= 5){
              Console.WriteLine(index);
              index++;
          }
    b: |+
          for(int i = 0; i < 5; i++){
              Console.WriteLine(i);
          }
---

{{% programming-language-articles/for-loops lang="C#" code-lang="cs" %}}

## Video Code

{{< code lang="csharp" >}}
for(int i = 0; i < 5; i++){
     Console.WriteLine(i);
}

int[] luckyNums = {4, 8, 15, 16, 23, 42};
foreach(int luckyNum in luckyNums){
     Console.WriteLine(luckyNum);
}
{{< /code >}}