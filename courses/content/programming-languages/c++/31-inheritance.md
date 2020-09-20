---
date: 2017-11-07T01:21:27-05:00
title: "Inheritance"
seo_title: "Inheritance | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers inheritance in C++.
author: GOUP
image: inheritance.png
video: rNa_aobriXo
url: /programming-languages/c++/inheritance/
weight: 31
---

## Code

{{< code lang="cpp" >}}
class Chef{
     public:
          void makeChicken(){
               cout << "The chef makes chicken" << endl;
          }

          void makeSalad(){
               cout << "The chef makes salad" << endl;
          }

          void makeSpecialDish(){
               cout << "The chef makes a special dish" << endl;
          }
};

class ItalianChef : public Chef{
     public:
          void makePasta(){
               cout << "The chef makes pasta" << endl;
          }

          // override
          void makeSpecialDish(){
               cout << "The chef makes chicken parm" << endl;
          }
};

int main(){

     Chef myChef();
     myChef.makeChicken();

     ItalianChef myItalianChef();
     myItalianChef.makeChicken();

     return 0;
}
{{< /code >}}