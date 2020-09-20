---
date: 2017-10-22T11:58:05-04:00
title: "Inheritance"
seo_title: "Inheritance | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers inheritance in Python.
author: GOUP
image: inheritance.png
video: z6MCR2O0yak
url: /programming-languages/python/inheritance/
weight: 34
---

## Code

{{< code lang="py" >}}
class Chef:
   def make_chicken(self):
       print("The chef makes chicken")

   def make_salad(self):
       print("The chef makes salad")

   def make_special_dish(self):
       print("The chef makes bbq ribs")

class ItalianChef(Chef):
   def make_pasta(self):
       print("The chef makes pasta")

   def make_special_dish(self):
       print("The chef makes chicken parm")


myChef = Chef()
myChef.make_chicken()

myItalianChef = ItalianChef()
myItalianChef.make_chicken()
{{< /code >}}