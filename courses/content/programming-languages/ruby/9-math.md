---
date: 2017-11-01T00:12:41-04:00
title: "Math"
seo_title: "Math | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers math in Ruby.
author: GOUP
image: math.png
video: qDLYmBm4NF8
url: /programming-languages/ruby/math/
weight: 9
code:
    a: |+
          puts  2 * 3         # Basic Arithmetic: +, -, /, *
          puts  2**3          # Exponent
          puts  10 % 3        # Modulus Op. : returns remainder of 10/3
          puts  1 + 2 * 3     # order of operations
          puts 10 / 3.0       # int's and doubles
---

{{% programming-language-articles/math lang="Ruby" code-lang="rb" %}}

## Video Code

{{< code lang="rb" >}}
puts  2 * 3         # Basic Arithmetic: +, -, /, *
puts  2**3          # Exponent
puts  10 % 3        # Modulus Op. : returns remainder of 10/3
puts  1 + 2 * 3     # order of operations
puts 10 / 3.0       # int's and doubles


num = 10
num += 100          # +=, -=, /=, *=
puts num

num = -36.8
puts  num.abs()
puts  num.round()

# Math class has useful math methods
puts Math.sqrt(144)
puts Math.log(0)
{{< /code >}}