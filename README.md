# jQuery requestAnimationFrame

Replaces the standard jQuery timer loop with `requestAnimationFrame` where supported.

**Requires jQuery 1.8+**

## What is `requestAnimationFrame`?

`requestAnimationFrame` is a [working draft spec](http://www.w3.org/TR/animation-timing/#requestAnimationFrame) that attempts to improve our animation performace by better syncing up with the frame rate of the browser.  For more information, read this article on [Jank Busting](http://www.html5rocks.com/en/tutorials/speed/rendering/)

## Why should I use it?

To quote part of the Jank Busting article:

> * Animations in background tabs get paused, conserving system resources and battery life.
>
> * If the system can't handle rendering at the screen's refresh rate, it can throttle animations and produce the callback less frequently (say, 30 times a second on a 60Hz screen). While this drops framerate in half, it keeps the animation consistent -- and as stated above, our eyes are much more attuned to variance than framerate. A steady 30Hz looks better than 60Hz that misses a few frames a second.

## Download

Download the [production version][min] or the [development version][max] of version 0.1.1.

[min]: https://raw.github.com/gnarf37/jquery-requestAnimationFrame/0.1.1/dist/jquery.requestAnimationFrame.min.js
[max]: https://raw.github.com/gnarf37/jquery-requestAnimationFrame/0.1.1/dist/jquery.requestAnimationFrame.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="jquery.requestAnimationFrame.min.js"></script>
```

## Documentation

There isn't anything you need to do other than include the `jquery.requestAnimationFrame.js` file to use `requestAnimationFrame`.

You should however beware of the first point above: **Animations in background tabs get paused**.

This means if you are using a `setInterval` or `setTimeout` to queue up new animations, when the user returns to the backgrounded page, jQuery will finally see an animation finish, and then start playing everything queued.  There is more information about potential workarounds in [jQuery Core Bug #9381](http://bugs.jquery.com/ticket/9381)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History

* 0.1.1 - Mar 5 2013
  * Removed `ms` prefix
* 0.1.0 - Jan 13 2013
  * Initial Release

## License
Copyright (c) 2012 Corey Frang  
Licensed under the MIT license.
