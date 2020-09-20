---
date: 2017-11-15T17:52:38-05:00
title: "For Loops"
seo_title: "For Loops | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers for loops in PHP.
author: GOUP
image: for-loops.png
video: eP5GADljZcE
url: /web-development/php/for-loops/
weight: 25
code:
    a: |+
          $index = 1;
          while ($index <= 5){
              echo $index;
              $index += 1;
          }
    b: |+
          for($i = 0; $i < 5; $i++){
              echo $i;
          }
---

{{% programming-language-articles/for-loops lang="PHP" code-lang="php" %}}

## Video Code

{{< code lang="php" >}}
for($i = 0; $i < 5; $i++){
     echo $i;
}

$luckyNums = [4, 8, 15, 16, 23, 42];
foreach($luckyNums as $luckyNum){
     echo $luckyNum."<br>";
}
{{< /code >}}