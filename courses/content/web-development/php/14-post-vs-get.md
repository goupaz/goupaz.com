---
date: 2017-11-15T17:52:37-05:00
title: "Post Vs Get"
seo_title: "Post Vs Get | PHP | GOUP"
subheader:
     greeting: PHP - Programming Language
     description: This course covers the basics of programming in PHP. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers post vs get in PHP.
author: GOUP
image: post-vs-get.png
video: TGbG3pHW4Po
url: /web-development/php/post-vs-get/
weight: 14
---

## Code

{{< code lang="php" file="site.php" >}}
<form action="App.php" method="POST">
     Password: <input type="password" name="password">
     <input type="submit">
</form>

<?php
echo $_POST["password"];
?>
{{< /code >}}