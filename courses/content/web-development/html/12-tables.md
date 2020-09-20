---
date: 2017-10-09T15:35:16-04:00
title: "Tables"
seo_title: "Tables | HTML | GOUP"
subheader:
     greeting: HTML - Build a Website
     description: This course covers the basics of building a website using HTML. Work your way through the videos/articles and I'll teach you everything you need to know to create a basic website!
description: This tutorial covers how to use tables in HTML.
author: GOUP
image: tables.png
video: 6RE5vCsPOS4
url: /web-development/html/tables/
weight: 12
---

## Code

{{< code lang="html" >}}
<table>
     <caption>My Table</caption>
     <thead>
          <tr>
               <th>num1</th>
               <th>num2</th>
               <th>num3</th>
          </tr>
     </thead>
     <tbody>
          <tr>
               <td colspan="2">one</td>
               <td>two</td>
               <td>three</td>
               <td>three and a half</td>
          </tr>
          <tr>
               <td>four</td>
               <td>five</td>
               <td>six</td>
          </tr>
     </tbody>
</table>
{{< /code >}}