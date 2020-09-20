---
date: 2017-10-22T11:58:04-04:00
title: "Building A Translator"
seo_title: "Building A Translator | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a translator in Python.
author: GOUP
image: building-a-translator.png
video: z71azOGJQRo
url: /programming-languages/python/building-a-translator/
weight: 25
---

## Code

{{< code lang="py" >}}
def translate(phrase):
     translation = ""
     for letter in phrase:
          if letter.lower() in "aeiou":
               if letter.isupper():
                    translation = translation + "G"
               else:
                    translation = translation + "g"
          else:
               translation = translation + letter
     return translation
{{< /code >}}