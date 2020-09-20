---
date: 2017-10-22T11:34:31-04:00
title: "Inheritance (Implements)"
seo_title: "Inheritance (Implements) | Java | GOUP"
subheader:
     greeting: Java - Programming Language
     description: This course covers the basics of programming in Java. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers inheritance (implements) in Java.
author: GOUP
image: inheritance-(implements).png
video: mSjAJn4hUqg
url: /programming-languages/java/inheritance-implements/
weight: 35
---

## Code

{{< code lang="java" >}}
interface Animal{
     public void speak();
}

class Cat implements Animal{
     @Override
     public void speak(){
          System.out.println("Meow Meow");
     }
}

class Dog implements Animal{
     @Override
     public void speak(){
          System.out.println("Woof Woof");
     }
}

public class App{
     public static void main(String [] args){
          Animal [] animals = {
               new Dog(),
               new Cat()
          };
          for(Animal animal : animals){
               animal.speak();
          }     
     }
}
{{< /code >}}