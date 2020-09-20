---
date: 2017-10-22T11:58:04-04:00
title: "Guessing Game"
seo_title: "Guessing Game | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers guessing game in Python.
author: GOUP
image: guessing-game.png
video: B9ORjeQlPOA
url: /programming-languages/python/guessing-game/
weight: 21
---

## Code

{{< code lang="py" >}}
secret_word = "giraffe"
guess = ""
guess_count = 0
guess_limit = 3
out_of_guesses = False

while guess != secret_word and not(out_of_guesses):
     if guess_count < guess_limit:
          guess = input("Enter a guess: ")
          guess_count += 1
     else:
          out_of_guesses = True

if out_of_guesses:
     print("You Lose!")
else:
     print("You Win!")
{{< /code >}}