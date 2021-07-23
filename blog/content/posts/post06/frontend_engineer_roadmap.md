---
title: "How To Be a Front-End Engineer That Stands Out"
date: 2021-07-21T20:00:00+02:00
weight: 3
authors:
  - orkhan-huseyn
tags:
  - Software Engineering
---

## Abstract

Front-end web development is the practice of converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data <sup>1</sup>. If you take a look at the <a href="http://info.cern.ch/hypertext/WWW/TheProject.html" target="_blank" rel="noreferrer noopener">first-ever website</a><sup>2</sup>, you can come into conclusion that being a front-end developer used to be very easy in early stages of web development; you just had to write HTML, nothing more. After <a href="https://css-tricks.com/look-back-history-css/" target="_blank" rel="noreferrer noopener">introducing CSS</a><sup>3</sup> and <a href="https://auth0.com/blog/a-brief-history-of-javascript/" target="_blank" rel="noreferrer noopener">JavaScript</a><sup>4</sup> the web started to be much more complicated.

After more than 20 years, HTML, CSS and JavaScript has evolved drastically and front-end development is now, so much more than just writing HTML and serving it statically. In today's world, a front-end developer needs to know how to develop accessible and performant web applications that requires a lot more knowledge than the technologies mentioned above. To be a front-end developer you need to add build tools, testing, JavaScript frameworks, performance optimization skills, web security, responsive design, web accessibility and other important stuff to your toolbox.

In this article we will talk about what you need to learn to be a front-end engineer that stands out from others. And of course, we'll share resources as well 😉

📝 **Notice**: _Note that the headings are not sorted in any particular order. You can learn the mentioned concepts in any order you wish_

## Know the basics

It doesn't matter whether you are front-end or a back-end engineer, you must have at least some basic CS knowledge. If you have a degree in Computer Science or similar major, then you already are one step ahead of others. If you don't have a degree in CS or you are coming from completely different major, then I would recommend starting with <a href="https://online-learning.harvard.edu/course/cs50-introduction-computer-science" target="_blank" rel="noreferrer noopener">CS50: Introduction to Computer Science course</a> by Harvard University on edX (it's free). After finishing that course, if you want a little deeper knowledge then you should enroll to <a href="https://www.coursera.org/learn/cs-algorithms-theory-machines" target="_blank" rel="noopener noreferrer">Computer Science: Algorithms, Theory, and Machines course</a> by Princeton University which is completely free on Coursera.

## Algorithms and Data Structures

Being part of the foundational knowledge, algorithms and data structures are very crucial to any kind of software engineer. If you already have knowledge about basic CS concepts then you must have heard of them before. As we are trying to be a front-end engineer, I recommend taking either <a href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/" target="_blank" rel="noreferrer noopener">Master the Coding Interview: Data Structures + Algorithms course</a> by Andrei Neagoie or <a href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/" target="_blank" rel="noreferrer noopener">JavaScript Algorithms and Data Structures Masterclass</a> by Colt Steele on Udemy. Both of these courses has simple way of explaining the concepts and they use JavaScript to implement them. We love JavaScript, right? 🤓 If you are a bookworm, then reading <a href="https://www.amazon.com/JavaScript-Data-Structures-Algorithms-Understanding/dp/1484239873" target="_blank" rel="noreferrer noopener">JavaScript Data Structures and Algorithms book</a> by Sammie Bae should be pretty much enough for you.

## Master your CSS

As a front-end developer who hated CSS for a long time, I would recommend stop hating and start learning. If you are starting from scratch, start watching <a href="" target="_blank" rel="noopener noreferrer">CSS - The Complete Guide 2021 (incl. Flexbox, Grid & Sass) course</a> by Maximilian Schwarzmüller and Manuel Lorenz. This course will strengthen your basic CSS skills and you will no more hate CSS. If you already have some intermediate CSS knowledge then definitely watch <a href="https://www.udemy.com/course/advanced-css-and-sass/" target="_blank" rel="noopener noreferrer">Advanced CSS and Sass: Flexbox, Grid, Animations and More! course</a> by Jonas Schmedtmann as well. This course will teach you internal workings of CSS, how to work with SASS, build tools and much more to level up your CSS confidence.

## Master your VCS - Git

Git is the most popular Version Control System that almost every software engineer uses in daily basis. However, most people haven't used any Git commands except `add`, `commit`, `pull`, `push` and `clone`. But do you know how to rebase? Have you ever resolved a merge conflict? Do you use `stash` or do you know how yo squash commits locally? Have you ever got stuck in <a href="https://www.cloudbees.com/blog/git-detached-head" target="_blank" rel="noopener noreferrer">detached head state</a>?

To start with basic Git skills visit <a href="https://githowto.com/" target="_blank" rel="noopener noreferrer">Git How To</a> and start reading (and of course doing) from <a href="https://githowto.com/setup" target="_blank" rel="noopener noreferrer">first section</a>. To get deeper knowledge on Git, its plumbing commands and internals, definitely watch <a href="https://frontendmasters.com/courses/git-in-depth/" target="_blank" rel="noopener noreferrer">Git In-depth course</a> by Nina Zakharenko on Frontend Masters.

## Learn how browsers work

Learning how the tools that you're using works internally, will always boost your self-confidence. When we write web applications, we don't always think about what browsers do and sometimes we torment them with the things we do. To get familiar with internal workings of browsers, read <a href="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/" target="_blank" rel="noopener noreferrer">How Browsers Work: Behind the scenes of modern web browsers</a> article by Tali Garsiel and Paul Irish. If you are even more curious and want to write your own browser, then <a href="https://limpet.net/mbrubeck/2014/08/08/toy-layout-engine-1.html" target="_blank" rel="noopener noreferrer">Let's build a browser engine! series</a> by Matt Brubeck will be a good start for you.

## Master JavaScript and get to know internals of JavaScript Engines

We hate things because we don't know why they do what they do. Trying to understand will always help (in life as well 😊). Most developers hate JavaScript because of its illogical looking results at first glance. For example, why `0 == "0"` is `true`, `0 == []` is `true` but `"0" == []` is `false`?<sup>5</sup> To understand this kind of stuff you need to know brief history of JavaScript<sup>4</sup> and <a href="https://tc39.es/ecma262/" target="_blank" rel="noopener noreferrer">its specifications</a>.

The useful resources to build up your JavaScript confidence:

- <a href="https://frontendmasters.com/courses/javascript-foundations/" target="_blank" rel="noopener noreferrer">Deep JavaScript Foundations</a> by Kyle Simpson (author of You Don't Know JS book)
- <a href="https://frontendmasters.com/courses/javascript-hard-parts/" target="_blank" rel="noopener noreferrer">JavaScript: The Hard Parts</a> and <a href="https://frontendmasters.com/courses/javascript-new-hard-parts/" target="_blank" rel="noopener noreferrer">JavaScript: The New Hard Parts</a> by Will Sentance.
- <a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank" rel="noopener noreferrer">The Complete JavaScript Course 2021: From Zero to Expert!</a> by Jonas Schmedtmann
- <a href="https://javascript.info/" target="_blank" rel="noopener noreferrer">The Modern JavaScript Tutorial</a> by Ilya Kantor

If you are already pretty much confident with JavaScript then start diving into internals of the engine. Since V8 is the most popular and performant JavaScript engine, there're plenty of articles and videos about how this engine works. To get started, read blog posts by SessionStack and freeCodeCamp:

- <a href="https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf" target="_blank" rel="noopener noreferrer">How JavaScript works: an overview of the engine, the runtime, and the call stack</a>
- <a href="https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e" target="_blank" rel="noopener noreferrer">How JavaScript works: inside the V8 engine + 5 tips on how to write optimized code</a>
- <a href="https://www.freecodecamp.org/news/javascript-under-the-hood-v8/">How JavaScript Works: Under the Hood of the V8 Engine</a>

To get more knowledge on engine internals, you can follow <a href="https://benediktmeurer.de/" target="_blank" rel="noopener noreferrer">Benedikt Meurer</a>, <a href="https://fhinkel.rocks/" target="_blank" rel="noopener noreferrer">Franziska Hinkelmann</a> and watch their talks on YouTube:

- <a href="https://www.youtube.com/watch?v=5nmpokoRaZI" target="_blank" rel="noopener noreferrer">JavaScript Engines: The Good Parts™ - Mathias Bynens & Benedikt Meurer - JSConf EU 2018</a>
- <a href="https://www.youtube.com/watch?v=cvybnv79Sek" target="_blank" rel="noopener noreferrer">Benedikt Meurer: A Tale of TurboFan: Four years that changed V8 forever</a>
- <a href="https://www.youtube.com/watch?v=IFWulQnM5E0" target="_blank" rel="noopener noreferrer">A Tale of Types, Classes, and Maps by Benedikt Meurer · JSCamp Barcelona 2018</a>
- <a href="https://www.youtube.com/watch?v=p-iiEDtpy6I" target="_blank" rel="noopener noreferrer">Franziska Hinkelmann: JavaScript engines - how do they even? | JSConf EU</a>
- <a href="https://www.youtube.com/watch?v=ihANrJ1Po0w" target="_blank" rel="noopener noreferrer">How JavaScript Engines Work by Franziska Hinkelmann @ Web Rebels 2017</a>
- <a href="https://www.youtube.com/watch?v=0I0d8LkDqyc" target="_blank" rel="noopener noreferrer">Mathias B, Benedikt M - JS Engine fundamentals [AgentConf]</a>

To stay up to date with the engines, you should follow their official blogs and read them regularly.

## Know how to optimize for performance

After you have a good grasp of internal workings of browsers and JavaScript engines, then you will start thinking of performance. In today's world, we have complex web applications that has variety of users with different kind of devices and different network conditions. For example, one user may have a 5G internet connection, the other might be in bad 2G connection, one user may have a MacBook with large retina screen and nice graphics card, the other might have and old Nokia smartphone. As a front-end engineer you need to optimize your web app's performance to be easily accessible and usable by any user.

For web performance related stuff you should follow Addy Osmani on <a href="https://twitter.com/addyosmani" target="_blank" rel="noopener noreferrer">Twitter</a> and read his blog posts on <a href="https://medium.com/@addyosmani" target="_blank" rel="noopener noreferrer">Medium</a> and on <a href="https://developers.google.com/web/resources/contributors/addyosmani" target="_blank" rel="noopener noreferrer">Google Developers</a>.

One course that I highly recommend you to watch is <a href="https://frontendmasters.com/courses/web-performance/" target="_blank" rel="noopener noreferrer">JavaScript Performance course</a> by Steve Kinney on Frontend Masters.

## Learn Web Accessibility

Accessibility (often abbreviated to A11y—as in "a" then 11 characters then "y") in Web development means enabling as many people as possible to use Web sites, even when those people's abilities are limited in some way<sup>6</sup>. This is the topic that most front-end developers overlook. The idea is very simple as W3C states:

> "The Web is fundamentally designed to work for all people, whatever their hardware, software, language, culture, location, or physical or mental ability. When the Web meets this goal, it is accessible to people with a diverse range of hearing, movement, sight, and cognitive ability."

Accessibility should be in mind while developing your web application. The questions you may ask to yourself are:

- Can a user without a mouse use my web app? - the answer is <a href="https://webaim.org/techniques/keyboard/" target="_blank" rel="noopener noreferrer">keyboard accessibility</a>
- Are users who use devices with different screen sizes (mobile, tablet, desktop) able to use my web app easily? - the answer is <a href="https://web.dev/responsive-web-design-basics/" target="_blank" rel="noopener noreferrer">responsive design</a>
- Are people with different visual deficiencies (blindness, color blindness, blurry vision etc.) able to use my web app?
- Can deaf people watch video on my website and understand it? - think of providing text alternative for time-based media

To make your web app accessible, there are lots of things that you should consider while working on your project. To get familiar with these concepts, I highly recommend to read <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility#key_accessibility_tutorials" target="_blank" rel="noopener noreferrer">web accessibility tutorials on Mozilla Developers Network</a>.

## Know your framework

If you're front-end developer, you're definitely working with one of popular JavaScript frameworks such as React ❤️, Vue 🔥 or Angular 💩. Did you ever think how React works? Did you ever try to take a look at Vue's source code? I know that this can be intimidating but I can offer you some resources to get you started.

For Vue, take a look at these courses on Vue Mastery:

- <a href="https://www.vuemastery.com/courses/advanced-components" target="_blank" rel="noopener noreferrer">Advanced Components</a>
- <a href="https://www.vuemastery.com/courses/vue3-deep-dive-with-evan-you" target="_blank" rel="noopener noreferrer">Vue 3 Deep Dive with Evan You</a>
- <a href="https://www.vuemastery.com/courses/vue-3-reactivity" target="_blank" rel="noopener noreferrer">Vue 3 Reactivity</a>

For React:

- <a href="https://www.youtube.com/watch?v=aS41Y_eyNrU" target="_blank" rel="noopener noreferrer">SMOOSHCAST: React Fiber Deep Dive with Dan Abramov</a>
- <a href="https://pomb.us/build-your-own-react/" target="_blank" rel="noopener noreferrer">Build your own React by Rodrigo Pombo</a>
- <a href="https://www.youtube.com/watch?v=CGpMlWVcHok" target="_blank" rel="noopener noreferrer">Building a Custom React Renderer | Sophie Alpert</a>
- <a href="https://overreacted.io/" target="_blank" rel="noopener noreferrer">Overreacted by Dan Abramov</a>

For Angular:

- 😃

## Learn build tools

Let's say you're writing a React app. You will probably use `create-react-app` CLI to create project and get to the code very fast. Now, suppose you do not have such CLI, can you create exact setup using Webpack and Babel (or maybe with other tools like Rollup)? If not, then go to <a href="https://webpack.js.org/concepts/" target="_blank" rel="noopener noreferrer">Webpack documentation</a> and start reading it. Then visit <a href="https://babeljs.io/">Babel's website</a> and start learning it as well. Of course there are a lot more than just Webpack and Babel, but knowing at least one built tool and being able to create a <a href="https://medium.com/swlh/a-complete-webpack-setup-for-react-e56a2edf78ae" target="_blank" rel="noopener noreferrer">complete webpack setup for React</a> would make you stand out among other developers.

## Learn testing

Testing is also a crucial skill for a front-end engineer. No matter, which JavaScript framework you are using, you should get to know its testing utilities and start writing some unit, integration and end-to-end tests. For unit and integration testing in React, I recommend watching <a href="https://testingreact.katifrantz.com/" target="_blank" rel="noopener noreferrer">The React Testing Masterclass</a> by Kati Frantz. For Vue and Angular, there are plenty of resources and documentation as well. For end-to-end testing, you can use Cypress which has <a href="https://docs.cypress.io/examples/examples/tutorials" target="_blank" rel="noopener noreferrer">starter tutorials</a> on its website.

## Learn containers and orchestration

You probably have heard of Docker, Kubernetes and other fancy stuff. But have you ever had any experience with them? You may know what they are but to make sure, you should at least learn Docker, be able to dockerize your application or even run it on a local single node Kubernetes cluster. If this sounds interesting I highly recommend you to watch <a href="https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/" target="_blank" rel="noopener noreferrer">Docker and Kubernetes: The Complete Guide course</a> by Stephen Grider. This course will teach you Docker, Docker compose, Kubernetes and you will even have chance to gain some experience with Google Cloud and AWS.

## Get a little full-stack and know the Web

Are you a front-end engineer who does not know what SQL is? Stop right there and start working on a back-end environment to have a little experience. It might be NodeJs, Go, Java, Python or PHP but you have to learn how to write APIs, how to authorize API users, how to create database and how to query database using SQL. Learn REST standards, be able to write REST APIs, get your hands on some GraphQL and so on.

If you look at some job descriptions from big tech companies, you will see a sentence like "Experience in one or more of object oriented programming languages such as Python, Java, C++". So learning a back-end language won't hurt you. Personally, my advice would be to learn a strictly typed programming language like Java or Go. If you are brave, you can even try C 🤓

Know the web, learn its components and be aware how all these stuff work together. I recommend to follow <a href="https://www.youtube.com/user/GISIGeometry" target="_blank" rel="noopener noreferrer">Hussein Nasser's YouTube channel</a>. You can get lots of useful information from him. Some sweet playlists from Hussein Nasser are:

- <a href="https://www.youtube.com/watch?v=V3ZPPPKEipA&list=PLQnljOFTspQUNnO4p00ua_C5mKTfldiYT" target="_blank" rel="noopener noreferrer">Backend Engineering</a>
- <a href="https://www.youtube.com/watch?v=7IS7gigunyI&list=PLQnljOFTspQUBSgBXilKhRMJ1ACqr7pTr" target="_blank" rel="noopener noreferrer">Network Engineering</a>
- <a href="https://www.youtube.com/watch?v=JhpUch6lWMw&list=PLQnljOFTspQU6zO0drAYHFtkkyfNJw1IO" target="_blank" rel="noopener noreferrer">HTTP</a> and <a href="https://www.youtube.com/watch?v=fVKPrDrEwTI&list=PLQnljOFTspQWbBegaU790WhH7gNKcMAl-" target="_blank" rel="noopener noreferrer">HTTP/2</a>
- <a href="https://www.youtube.com/watch?v=SqqrOspasag&list=PLQnljOFTspQVMeBmWI2AhxULWEeo7AaMC" target="_blank" rel="noopener noreferrer">Proxies</a>
- <a href="https://www.youtube.com/watch?v=2Nt-ZrNP22A&list=PLQnljOFTspQUGjfGdg8UvL3D_K9ACL6Qh" target="_blank" rel="noopener noreferrer">Web Sockets</a>
- and many more on the channel.

You may encounter same videos in different playlists but that's okay.

## Conclusion

I agree that there are a lot of things to learn but you don't need to rush. We didn't even talk about cyber security, operating system concepts, design patterns, programming language paradigms like OOP and FP, Linux, command line etc. So, there are plenty of time ahead of us and learning journey will never end. Even after you have 15 years of experience, you will still learn something new every day. Learn, be humble and accept that no one knows everything and we'll always have something to learn. Good luck on your journey! If you think anything is wrong with this article, do not hesitate to create an issue or contact us. And of course, grow and GO UP! ❤️

## References

1. Wikipedia contributors. (2021, July 11). Front-end web development. Wikipedia. https://en.wikipedia.org/wiki/Front-end_web_development
2. Nix, E. (2018, August 31). The World’s First Web Site. HISTORY. https://www.history.com/news/the-worlds-first-web-site
3. Hoffmann, J. (2017, October 23). A Look Back at the History of CSS. CSS-Tricks. https://css-tricks.com/look-back-history-css/
4. A Brief History of JavaScript. (2017, January 16). Auth0 - Blog. https://auth0.com/blog/a-brief-history-of-javascript/
5. Bzadough, Y. (2019, October 13). The Best JavaScript Meme I’ve Ever Seen, Explained in detail. FreeCodeCamp.Org. https://www.freecodecamp.org/news/explaining-the-best-javascript-meme-i-have-ever-seen/
6. Accessibility | MDN. (2021, June 10). Mozilla Developers Network. https://developer.mozilla.org/en-US/docs/Web/Accessibility
