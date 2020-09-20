---
date: 2017-11-01T00:12:44-04:00
title: "Reading Files"
seo_title: "Reading Files | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers reading files in Ruby.
author: GOUP
image: reading-files.png
video: 92li0A8d4io
url: /programming-languages/ruby/reading-files/
weight: 26
---

## Code

{{< code lang="rb" >}}
File.open("employees.txt", "r") do |file|
     for line in file.readlines()
          puts line
     end
end

# ---------------
# or
# ---------------

file = File.open("employees.txt", "r")

puts file.read

file.close()
{{< /code >}}