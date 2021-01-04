---
title: "Emoji Support"
date: 2020-07-13T19:00:00+02:00
authors:
  - john-doe
  - Special User
tags:
  - Documentation
---

Emoji can be enabled in a Hugo project in a number of ways.

<!--more-->

The [emojify](https://gohugo.io/functions/emojify/) function can be called directly in templates or [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes).

To enable emoji globally, set `enableEmoji` to `true` in your site's [configuration](https://gohugo.io/getting-started/configuration/) and then you can type emoji shorthand codes directly in content files:

<!-- markdownlint-disable -->
<!-- spellchecker-disable -->

<span class="no-wrap">{{< emojify ":see_no_evil:" >}} <code>:see_no_evil:</code></span>
<span class="no-wrap">{{< emojify ":hear_no_evil:" >}} <code>:hear_no_evil:</code></span>
<span class="no-wrap">{{< emojify ":speak_no_evil:" >}} <code>:speak_no_evil:</code></span>

<!-- spellchecker-enable -->
<!-- markdownlint-restore -->

The [Emoji cheat sheet](http://www.emoji-cheat-sheet.com/) is a useful reference for emoji shorthand codes.

{{< hint info >}}
**Info**\
The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack.
{{< /hint >}}

**Example:**

<!-- spellchecker-disable -->
<!-- prettier-ignore -->
{{< highlight html "linenos=table" >}}
.emoji {
  font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
}
{{< /highlight >}}

<!-- spellchecker-enable -->
