---
date: 2017-11-15T17:52:37-05:00
title: "Creating A Calculator"
seo_title: "Creating A Calculator | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers creating a calculator in PHP.
author: GOUP
image: creating-a-calculator.png
video: 9POvWdCypkA
url: /web-development/php/creating-a-calculator/
weight: 11
---

## Code

{{< code lang="php" file="site.php">}}
<form action="site.php" method="GET">
     Num1: <input type="number" name="num1">
     Num2: <input type="number" name="num2">
     <input type="submit">
</form>

<?php
     $num1 = $_GET["num1"];
     $num2 = $_GET["num2"];
     echo $num1 + $num2;
?>
{{< /code >}}