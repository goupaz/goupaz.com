---
date: 2017-11-07T01:21:25-05:00
title: "Building A Mad Libs Game"
seo_title: "Building A Mad Libs Game | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a mad libs game in C++.
author: GOUP
image: building-a-mad-libs-game.png
video: gTWd2TS3584
url: /programming-languages/c++/building-a-mad-libs-game/
weight: 12
---

## Code

{{< code lang="cpp" >}}
string color, pluralNoun, celebrity;

cout << "Enter color: ";
cin >> color;

cout << "Enter plural noun: ";
cin >> pluralNoun;

cout << "Enter celebrity: ";
cin >> celebrity;


cout << "Roses are " << color << endl;
cout << pluralNoun << " are blue" << endl;
cout << "I love " << celebrity << endl;
{{< /code >}}