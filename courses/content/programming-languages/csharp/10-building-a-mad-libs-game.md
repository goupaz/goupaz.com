---
date: 2017-11-08T18:34:45-05:00
title: "Building A Mad Libs Game"
seo_title: "Building A Mad Libs Game | C# | GOUP"
subheader:
     greeting: C# - Programming Language
     description: This course covers the basics of programming in C#. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a mad libs game in C#.
author: GOUP
image: building-a-mad-libs-game.png
video: juANFo-PbsY
url: /programming-languages/csharp/building-a-mad-libs-game/
weight: 10
---

## Code

{{< code lang="csharp" >}}
Console.Write("Enter color: ");
string color = Console.ReadLine();

Console.Write("Enter plural noun: ");
string pluralNoun = Console.ReadLine();

Console.Write("Enter celebrity: ");
string celebrity = Console.ReadLine();

Console.WriteLine($"Roses are {color}");
Console.WriteLine($"{pluralNoun} are blue");
Console.WriteLine($"I love {celebrity}");
{{< /code >}}