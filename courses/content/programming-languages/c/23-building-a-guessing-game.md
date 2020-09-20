---
date: 2017-11-01T00:17:48-04:00
title: "Building A Guessing Game"
seo_title: "Building A Guessing Game | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a guessing game in C.
author: GOUP
image: building-a-guessing-game.png
video: me1UdMmDae8
url: /programming-languages/c/building-a-guessing-game/
weight: 23
---

## Code

{{< code lang="c" >}}
int secretNum = 7;
int guess;
int guessCount = 0;
int guessLimit = 3;
int outOfGuesses = 0;

while(guess != secretNum && outOfGuesses == 0){
     if(guessCount < guessLimit){
          printf("Enter a guess: ";
          scanf("d", &guess);
          guessCount++;
     } else {
          outOfGuesses = 1;
     }
}

if(outOfGuesses != 0){
     printf("You Lose!");
} else {
     printf("You Win!");
}
{{< /code >}}