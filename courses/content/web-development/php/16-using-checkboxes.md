---
date: 2017-11-15T17:52:37-05:00
title: "Using Checkboxes"
seo_title: "Using Checkboxes | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers using checkboxes in PHP.
author: GOUP
image: using-checkboxes.png
video: 1d-_p-64HNM
url: /web-development/php/using-checkboxes/
weight: 16
---

## Code

{{< code lang="php" file="site.php">}}
<form action="site.php" method="POST">
     Apples: <input type="checkbox" name="fruits[]" value="apples">
     Oranges: <input type="checkbox" name="fruits[]" value="oranges">
     Pears: <input type="checkbox" name="fruits[]" value="pears">
     <input type="submit">
</form>

<?php
$fruits = _POST["fruits"];
echo $fruits[1];
?>
{{< /code >}}