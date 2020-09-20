---
date: 2017-11-08T18:34:46-05:00
title: "Building A Guessing Game"
seo_title: "Building A Guessing Game | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a guessing game in C#.
author: GOUP
image: building-a-guessing-game.png
video: sFe6BrtS-vw
url: /programming-languages/csharp/building-a-guessing-game/
weight: 19
---
## Code

{{< code lang="csharp" >}}
string secretWord = "giraffe";
string guess = "";
int guessCount = 0;
int guessLimit = 3;
bool outOfGuesses = false;

while(!guess == secretWord && !outOfGuesses){
     if(guessCount < guessLimit){
          Console.Write("Enter a guess: ");
          guess = Console.ReadLine();
          guessCount++;
     } else {
          outOfGuesses = true;
     }
}

if(outOfGuesses){
     Console.WriteLine("You Lose!");
} else {
     Console.WriteLine("You Win!");
}
{{< /code >}}