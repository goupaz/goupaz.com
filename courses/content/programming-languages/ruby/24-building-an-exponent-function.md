---
date: 2017-11-01T00:12:44-04:00
title: "Building An Exponent Function"
seo_title: "Building An Exponent Function | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building an exponent function in Ruby.
author: GOUP
image: building-an-exponent-function.png
video: yK5eMYUww6k
url: /programming-languages/ruby/building-an-exponent-function/
weight: 24
---

## Code

{{< code lang="rb" >}}
def pow(base_num, pow_num)
     result = 1
     pow_num.times do |index|
          result = result * base_num
     end
     return result
end
{{< /code >}}