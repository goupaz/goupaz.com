---
date: 2017-11-15T17:52:37-05:00
title: "Math"
seo_title: "Math | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers math in PHP.
author: GOUP
image: math.png
video: FofSBlAm6Lg
url: /web-development/php/math/
weight: 9
code:
    a: |+
          echo (2 * 3)."<br>";            // Basic Arithmetic: +, -, /, *
          echo (2**3)."<br>";             // Basic Arithmetic: +, -, /, *
          echo (10 % 3)."<br>";           // Modulus Op. : returns remainder of 10/3
          echo (1 + 2 * 3)."<br>";        // order of operations
          echo (10 / 3.0)."<br><br>";     // int's and doubles
---

{{% programming-language-articles/math lang="PHP" code-lang="php" %}}

## Video Code

{{< code lang="php" >}}
echo (2 * 3)."<br>";            // Basic Arithmetic: +, -, /, *
echo (2**3)."<br>";             // Basic Arithmetic: +, -, /, *
echo (10 % 3)."<br>";           // Modulus Op. : returns remainder of 10/3
echo (1 + 2 * 3)."<br>";        // order of operations
echo (10 / 3.0)."<br><br>";     // int's and doubles


$num = 10;
$num += 100;                    // +=, -=, /=, *=
echo $num."<br>";

$num++;
echo $num."<br><br>";

// useful math methods
echo max(2, 3)."<br>";
echo sqrt(144)."<br>";
echo round(2.7)."<br>";
{{< /code >}}