---
date: 2017-11-08T18:34:48-05:00
title: "Inheritance"
seo_title: "Inheritance | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers inheritance in C#.
author: GOUP
image: inheritance.png
video: 9atF8x1U6QI
url: /programming-languages/csharp/inheritance/
weight: 31
---
## Code

{{< code lang="csharp" >}}
public class Chef
{

   public void MakeChicken()
   {
       Console.WriteLine("The chef makes chicken");
   }

   public void MakeSalad()
   {
       Console.WriteLine("The chef makes salad");
   }

   public virtual void MakeSpecialDish()
   {
       Console.WriteLine("The chef makes a special dish");
   }
}

public class ItalianChef : Chef
{
   public void MakePasta()
   {
       Console.WriteLine("The Chef make's past");
   }

   public override void MakeSpecialDish()
   {
       Console.WriteLine("The chef makes chicken parm");
   }
}

public class App
{
     public static void Main(string[] args)
     {

          Chef myChef = new Chef();
          myChef.MakeChicken();

          ItalianChef myItalianChef = new ItalianChef();
          myItalianChef.MakeChicken();
     }
}

{{< /code >}}