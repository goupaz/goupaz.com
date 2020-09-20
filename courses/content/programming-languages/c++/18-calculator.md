---
date: 2017-11-07T01:21:26-05:00
title: "Calculator"
seo_title: "Calculator | C++ | GOUP"
subheader:
     greeting: C++ - Programming Language
     description: This course covers the basics of programming in C++. Work your way through the videos/articles and I'll teach you everything you need to know to start your programming journey!
description: This tutorial covers calculator in C++.
author: GOUP
image: calculator.png
video: HpU4_AMhN54
url: /programming-languages/c++/calculator/
weight: 18
---

## Code

{{< code lang="cpp" >}}
int num1, num2;
char op;

cout << "Enter num1: ";
cin >> num1;

cout << "Enter Operator: ";
cin >> op;

cout << "Enter num2: ";
cin >> num2;

if(op == '+'){
     cout << num1 + num2 << endl;
} else if(op == '-'){
     cout << num1 - num2 << endl;
} else if(op == '/'){
     cout << num1 / num2 << endl;
} else if(op == '*'){
     cout << num1 * num2 << endl;
} else {
     cout << "Invalid Operator" << endl;
}
{{< /code >}}