// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

/*
 * jquery.requestAnimationFrame
 * https://github.com/gnarf37/jquery-requestAnimationFrame
 * Requires jQuery 1.8+
 *
 * Copyright (c) 2012 Corey Frang
 * Licensed under the MIT license.
 */

(function( $ ) {

var animating;

function raf() {
	if ( animating ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

if ( window.requestAnimationFrame ) {

	jQuery.fx.timer = function( timer ) {
		if ( timer() && jQuery.timers.push( timer ) && !animating ) {
			animating = true;
			raf();
		}
	};

	jQuery.fx.stop = function() {
		animating = false;
	};

}

}( jQuery ));
