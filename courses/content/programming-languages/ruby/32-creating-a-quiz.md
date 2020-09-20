---
date: 2017-11-01T00:12:45-04:00
title: "Creating A Quiz"
seo_title: "Creating A Quiz | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers creating a quiz in Ruby.
author: GOUP
image: creating-a-quiz.png
video: kNFMNE8O8Vc
url: /programming-languages/ruby/creating-a-quiz/
weight: 32
---

## Code

{{< code lang="rb" >}}
class Question
     attr_accessor :prompt, :answer
     def initialize(prompt, answer)
          @prompt = prompt
          @answer = answer
     end
end

p1 = "What color are apples?\n(a) Red/Green\n(b)Orange"
p2 = "What color are bananas?\n(a) Red/Green\n(b)Yellow"

questions = [
     Question.new(p1, "a"),
     Question.new(p2, "b")
]

def run_quiz(questions)
     answer = ""
     score = 0
     for question in questions
          puts question.prompt
          answer = gets.chomp()
          if answer == question.answer
               score += 1
          end
     end
     puts "you got #{score} out of #{questions.length()}"
end

run_quiz(questions)
{{< /code >}}