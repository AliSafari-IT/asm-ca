---
slug: styletron-react
title: React bindings for Styletron
authors: alisafari
tags: [styletron_react]
---

Styletron is distributed through npmjs.com. It consists of a few packages. The basic React setup requires adding two of them:

 <!-- truncate -->

```js
yarn add styletron-engine-atomic styletron-react

```

:::tip

Use the power of React to create interactive blog posts.

```js
<html>
  <head>
    <style>
      .foo {
        font-size: 20px;
      }
      .bar {
        color: red;
      }
    </style>
  </head>
  <body>
    <a href="/welcome" class="foo bar">Start!</a>
  </body>
</html>
```

<button onClick={() => alert('button clicked!')}>Click me!</button>

:::
