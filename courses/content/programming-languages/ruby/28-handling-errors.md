---
date: 2017-11-01T00:12:44-04:00
title: "Handling Errors"
seo_title: "Handling Errors | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers handling errors in Ruby.
author: GOUP
image: handling-errors.png
video: J7R94i2bhlI
url: /programming-languages/ruby/handling-errors/
weight: 28
---

## Code

{{< code lang="rb" >}}
begin
     # puts bad_variable
     num = 10/0
rescue ZeroDivisionError
     puts "Error"
rescue
     puts "All other errors"
end

# or raise an exception

raise "Made Up Exception"
{{< /code >}}