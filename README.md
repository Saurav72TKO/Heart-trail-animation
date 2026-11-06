# Heart Trail Animation

A small interactive project built with HTML, CSS, and vanilla JavaScript. Move your mouse across the page and a trail of hearts follows your cursor, each one a different size, before fading away.

## How It Works

1. A `mousemove` listener is attached to the `<body>`.
2. Every time the mouse moves, a new `<span>` element is created.
3. The span is placed at the cursor position using the event's `offsetX` and `offsetY`.
4. A random size (between 0 and 100px) is assigned to its width and height.
5. The span is added to the page, and after 3 seconds it is removed automatically so the DOM doesn't fill up.

The heart look and the fade/float animation come from the styles on the `span` in `style.css`.

## Project Structure

```
heart-trail-animation/
├── index.html   # Page structure
├── style.css    # Heart shape and animation styles for the span
└── index.js     # Mouse tracking and heart creation logic
```

## Getting Started

1. Download or clone the project.
2. Open `index.html` in any modern browser.
3. Move your mouse around the page and watch the hearts appear.

No installation or build tools needed.

## Code Overview

```javascript
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  const sizeVar = Math.random() * 100;
  spanEl.style.width = sizeVar + "px";
  spanEl.style.height = sizeVar + "px";

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
```

## Concepts Practiced

- DOM selection with `querySelector`
- Event listeners (`mousemove`) and the event object
- Creating and removing elements dynamically
- Setting inline styles from JavaScript
- `Math.random()` for random values
- `setTimeout` for delayed cleanup

## Customization Ideas

- Change the `100` in `Math.random() * 100` to make hearts bigger or smaller.
- Change `3000` in `setTimeout` to make hearts stay longer or disappear faster.
- Edit the colours and animation in `style.css`.
- Randomize the colour of each heart from JavaScript.

## License

Free to use for learning and personal projects.
