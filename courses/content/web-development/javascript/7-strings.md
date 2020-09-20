---
date: 2017-10-22T11:23:34-04:00
title: "Strings"
seo_title: "Strings | Javascript | GOUP"
subheader:
     greeting: Javascript - Program the Web
     description: This course covers the basics of programming in Javascript. Work your way through the videos/articles and I'll teach you everything you need to know to make your website more responsive!
description: This tutorial covers strings in Javascript.
author: GOUP
image: strings.png
video: 3JJyYmkXMSA
url: /web-development/javascript/strings/
weight: 7
code:
    a: |+
          var greeting = "Hello";
    b: |+
          var greeting = "Hello";
          //   indexes:   01234
    c: |+
          document.write( greeting.length + "<br>" );
    d: |+
          document.write( greeting.charAt(0) + "<br>"  );
---

{{% programming-language-articles/strings lang="JavaScript" code-lang="js" %}}


## Video Code

{{< code lang="js" >}}
var greeting = "Hello";
//   indexes:   01234

document.write( greeting.length + "<br>" );
document.write( greeting.charAt(0) + "<br>"  );
document.write( greeting.indexOf("llo") + "<br>"  );
document.write( greeting.indexOf("z") + "<br>"  );
document.write( greeting.substring(2) + "<br>"  );
document.write( greeting.substring(1, 3) + "<br>"  );
{{< /code >}}