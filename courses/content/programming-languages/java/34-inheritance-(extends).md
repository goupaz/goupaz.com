---
date: 2017-10-22T11:34:31-04:00
title: "Inheritance (Extends)"
seo_title: "Inheritance (Extends) | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers inheritance (extends) in Java.
author: GOUP
image: inheritance-(extends).png
video: ePFWoOnyYHc
url: /programming-languages/java/inheritance-extends/
weight: 34
---

## Code

{{< code lang="java" >}}
class Chef{
     public void makeChicken(){
          System.out.println("The chef makes chicken");
     }

     public void makeSalad(){
          System.out.println("The chef makes salad");
     }

     public void makeSpecialDish(){
          System.out.println("The chef makes a special dish");
     }
}

class ItalianChef extends Chef{
     public void makePasta(){
          System.out.println("The chef makes pasta");
     }

     @Override
     public void makeSpecialDish(){
          System.out.println("The chef makes chicken parm");
     }
}

public class App{
     public static void main(String [] args){
          Chef myChef = new Chef();
          myChef.makeChicken();

          ItalianChef myItalianChef = new ItalianChef();
          myItalianChef.makeChicken();
     }
}

{{< /code >}}