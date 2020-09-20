---
date: 2017-10-22T11:58:05-04:00
title: "Building A Quiz"
seo_title: "Building A Quiz | Python | GOUP"
subheader:
     greeting: Python - Programming Language
     description: This course covers the basics of programming in Python. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a quiz in Python.
author: GOUP
image: building-a-quiz.png
video: SgQhwtIoQ7o
url: /programming-languages/python/building-a-quiz/
weight: 32
---

## Code

{{< code lang="py" >}}

class Question:
     def __init__(self, prompt, answer):
          self.prompt = prompt
          self.answer = answer

question_prompts = [
     "What color are apples?\n(a) Red/Green\n(b)Orange",
     "What color are bananas?\n(a) Red/Green\n(b)Yellow",
]

questions = [
     Question(question_prompts[0], "a"),
     Question(question_prompts[1], "b"),
]

def run_quiz(questions):
     score = 0
     for question in questions:
          answer = input(question.prompt)
          if answer == question.answer:
               score += 1
     print("you got", score, "out of", len(questions))

run_quiz(questions)
{{< /code >}}