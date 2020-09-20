---
date: 2017-11-15T17:52:37-05:00
title: "Building A Mad Libs Game"
seo_title: "Building A Mad Libs Game | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a mad libs game in PHP.
author: GOUP
image: building-a-mad-libs-game.png
video: r9MP_Gy5r4Y
url: /web-development/php/building-a-mad-libs-game/
weight: 12
---

## Code

{{< code lang="php" file="site.php">}}
<form action="site.php" method="GET">
     Color: <input type="text" name="color">
     Plural Noun: <input type="text" name="pluralNoun">
     Celebrity: <input type="text" name="celebrity">
     <input type="submit">
</form>

<?php
     $color = $_GET["color"];
     $pluralNoun = $_GET["pluralNoun"];
     $celebrity = $_GET["celebrity"];

     echo "Roses are $color";
     echo "$pluralNoun are blue";
     echo "I love $celebrity";
?>
{{< /code >}}