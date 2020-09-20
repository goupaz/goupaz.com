---
date: 2017-11-01T00:17:41-04:00
title: "Building A Mad Libs Game"
seo_title: "Building A Mad Libs Game | C | GOUP"
subheader:
     greeting: C - Programming Language
     description: This course covers the basics of programming in C. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers building a mad libs game in C.
author: GOUP
image: building-a-mad-libs-game.png
video: HDPErscKm7Y
url: /programming-languages/c/building-a-mad-libs-game/
weight: 14
---

## Code

{{< code lang="c" >}}
// using fgets() instead of scanf()

char color[50];
char pluralNoun[50];
char celebrity[50];

printf("Enter color: ");
fgets(color, 50, stdin);

printf("Enter plural noun: ");
fgets(pluralNoun, 50, stdin);

printf("Enter celebrity: ");
fgets(celebrity, 50, stdin);

printf("Roses are %s \n", color);
printf("%s are blue \n", pluralNoun);
printf("I love %s \n", celebrity);
{{< /code >}}