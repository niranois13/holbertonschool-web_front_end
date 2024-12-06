SASS & SCSS

![sass logo](https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg)

Fourth project of the Holberton's FullStack specialization !

We will focus on Sacss/Scss syntaxes for this one.

Sass, Syntactically Awesome Style Sheets, is a preprocessed scritpting language compiled into CSS.
It was designed by Hampton Catlin and developed by Natalie Weizenbaum and Chris Eppstein. It appeared in November 2006.

Sass/Scss are two syntaxes. Their main diference lies in the fact that Sass uses an indented syntaxe without brackets where Scss is closer to native CSS, using backets and semicolons. Other than that, those two syntaxes are the same.

One of the main purpose of writing Sass/Scss, is the possibility to declare variables with their attributes and then reuse those:
```
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
Starting from variable declarations, we will be able to do much more:

- Nesting:
To improve coding experience and to avoid repetition or unclear code, Sass/Scss provides the possibility to nest code:
```
SassPlayground
SCSS Syntax
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```
- Mixins:
Still having in mind impoving coding experience and a DRY (Don't Repeat Yourself) approach, we can declare Mixins as a groupe of variables:
```
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

.info {
  @include theme;
}
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

- @use rule, partials and imports:
To modularize and keep clean our CSS, we can use partials, Sass/Scss files named `_example.scss` or `_example.sass`. Those partials files will contain parts of code that we will then reuse elsewhere. Because, yes, you can spit your Sass/Scss in different files !
To later use them, we call them with the `@use` rule, as an import. For example, we hase this base partial:
```
SCSS Syntax
// _base.scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```
If we want to use it somewhere else:
```
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```

- Operators:
In order to easily do maths in CSS, we can use the standard math operators in our Sass/Scss, `+, - * and math.div()` after importing the sass:math module:
```
@use "sass:math";

.container {
  display: flex;
}

article[role="main"] {
  width: math.div(600px, 960px) * 100%;
}

aside[role="complementary"] {
  width: math.div(300px, 960px) * 100%;
  margin-left: auto;
}
```

And there is so much more to do with Sass/Scss !

In order to use Sass/Scss code, you need to preprocess it wth the `sass` command as this:
```
sass input.scss styles.css
```
There, `input.scss` is the Scss file that will be processed into `styles.css`.
By adding the `--watch` flag, we ensure that a Scss file (or folder containing Scss files) will be processed into CSS each time we modify it:
```
sass --watch app/sass:public/stylesheets
```
There, Sass/Scss files inside `app/sass` will be compiled into CSS files in the `public/stylesheets` folder each time they are modified.