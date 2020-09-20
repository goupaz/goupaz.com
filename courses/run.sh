# for f in content/static-site-generators/jekyll/*.md
# do
#      echo -en "\n## Code\n\n{{< code lang=\"\" >}}\n\n{{< /code >}}" >> $f
# done
lang="java"
echo "
## Code

### Printing
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Variables
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Variables and Data Types
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Casting and Converting
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Strings
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Numbers
{{< code lang=\"$lang\" >}}

{{< /code >}}

### User Input
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Arrays
{{< code lang=\"$lang\" >}}

{{< /code >}}

### 2 Dimensional Arrays
{{< code lang=\"$lang\" >}}

{{< /code >}}

### ArrayList
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Methods
{{< code lang=\"$lang\" >}}

{{< /code >}}

### If Statements
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Switch Statements
{{< code lang=\"$lang\" >}}

{{< /code >}}

### While Loops
{{< code lang=\"$lang\" >}}

{{< /code >}}

### For Loops
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Exception Catching
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Classes and Objects
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Constructors
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Getters and Setters
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Inheritance
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Abstract Classes and Methods
{{< code lang=\"$lang\" >}}

{{< /code >}}

### Interface Inheritance
{{< code lang=\"$lang\" >}}

{{< /code >}}
" >> content/web-development/javascript/in-one-video.md
