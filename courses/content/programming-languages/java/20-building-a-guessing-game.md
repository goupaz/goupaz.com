---
date: 2017-10-22T11:34:29-04:00
title: "Building A Guessing Game"
seo_title: "Building A Guessing Game | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a guessing game in Java.
author: GOUP
image: building-a-guessing-game.png
video: sWP9VPpys-U
url: /programming-languages/java/building-a-guessing-game/
weight: 20
---

## Code

{{< code lang="java" >}}
// import java.util.Scanner;
Scanner keyboardInput = new Scanner(System.in);

String secretWord = "giraffe";
String guess = "";
int guessCount = 0;
int guessLimit = 3;
boolean outOfGuesses = false;

while(!guess.equals(secretWord) && !outOfGuesses){
     if(guessCount < guessLimit){
          System.out.print("Enter a guess: ");
          guess = keyboardInput.nextLine();
          guessCount++;
     } else {
          outOfGuesses = true;
     }
}

if(outOfGuesses){
     System.out.println("You Lose!");
} else {
     System.out.println("You Win!");
}

{{< /code >}}