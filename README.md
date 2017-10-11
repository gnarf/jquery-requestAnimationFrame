# jQuery requestAnimationFrame

[![CDNJS](https://img.shields.io/cdnjs/v/jquery-requestAnimationFrame.svg)](https://cdnjs.com/libraries/jquery-requestAnimationFrame)

Replaces the standard jQuery timer loop with `requestAnimationFrame` where supported.

NOTE: jQuery 3.0.0 & newer uses `requestAnimationFrame` natively if it's available in the browser. This plugin is only needed for older versions of jQuery. If it detects jQuery 3.0 or newer it warns and does nothing.

**Requires jQuery 1.8+**

## What is `requestAnimationFrame`?

`requestAnimationFrame` is a [W3C spec](http://www.w3.org/TR/animation-timing/#requestAnimationFrame) (at [Candidate Recommendation](http://www.w3.org/2005/10/Process-20051014/tr.html#q74) level) that attempts to improve our animation performace by better syncing up with the frame rate of the browser.  For more information, read this article on [Jank Busting](http://www.html5rocks.com/en/tutorials/speed/rendering/)

## Why should I use it?

To quote part of the Jank Busting article:

> * Animations in background tabs get paused, conserving system resources and battery life.
>
> * If the system can't handle rendering at the screen's refresh rate, it can throttle animations and produce the callback less frequently (say, 30 times a second on a 60Hz screen). While this drops framerate in half, it keeps the animation consistent -- and as stated above, our eyes are much more attuned to variance than framerate. A steady 30Hz looks better than 60Hz that misses a few frames a second.

## Download

Download the [production version][min] or the [development version][max] of version 0.1.2.

[min]: https://unpkg.com/jquery.requestanimationframe@0.2.2/dist/jquery.requestanimationframe.min.js
[max]: https://unpkg.com/jquery.requestanimationframe@0.2.2/dist/jquery.requestanimationframe.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="jquery.requestanimationframe.min.js"></script>
```

## Documentation

There isn't anything you need to do other than include the `jquery.requestanimationframe.js` file to use `requestAnimationFrame`.

You should however beware of the first point above: **Animations in background tabs get paused**.

This means if you are using a `setInterval` or `setTimeout` to queue up new animations, when the user returns to the backgrounded page, jQuery will finally see an animation finish, and then start playing everything queued.  There is more information about potential workarounds in [jQuery Core Bug #9381](http://bugs.jquery.com/ticket/9381)

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History

* 0.2.1, 0.2.2 - Oct 26 2016
  * README updates
* 0.2.0 - Oct 26 2016
  * Started publishing to npm :tada:
  * Added Browserify/RequireJS/Webpack support
  * Dropped the rAF polyfill
  * Stopped using the vendor-prefixed rAF version; such browsers are now treated as if they didn't have rAF at all
* 0.1.2 - Apr 15 2013
  * Removed `o` prefix - opera only ships with unprefixed rAF
* 0.1.1 - Mar 5 2013
  * Removed `ms` prefix
* 0.1.0 - Jan 13 2013
  * Initial Release

## License
Copyright (c) 2012 Corey Frang
Licensed under the MIT license.
