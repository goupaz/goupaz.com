---
date: 2017-11-01T00:12:42-04:00
title: "Return"
seo_title: "Return | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers return in Ruby.
author: GOUP
image: return.png
video: eG14yPuy0vk
url: /programming-languages/ruby/return/
weight: 16
---

## Code

{{< code lang="rb" >}}
def add_numbers(num1, num2=99)
     return num1 + num2
end

sum = add_numbers(4, 3)
puts sum
{{< /code >}}