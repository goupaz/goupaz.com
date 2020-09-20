---
date: 2017-11-01T00:12:43-04:00
title: "Building A Guessing Game"
seo_title: "Building A Guessing Game | Ruby | GOUP"
subheader:
     greeting: Ruby - Programming Language
     description: This course covers the basics of programming in Ruby. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a guessing game in Ruby.
author: GOUP
image: building-a-guessing-game.png
video: CIYbn88_26w
url: /programming-languages/ruby/building-a-guessing-game/
weight: 22
---

## Code

{{< code lang="rb" >}}
secret_word = "giraffe"
guess = ""
guess_count = 0
guess_limit = 3
out_of_guesses = false

while guess != secret_word and !out_of_guesses:
     if guess_count < guess_limit
          puts "Enter guess: "
          guess = gets.chomp()
          guess_count += 1
     else
          out_of_guesses = true
     end
end

if out_of_guesses
     puts "You Lose!"
else
     puts "You Win!"
end
{{< /code >}}