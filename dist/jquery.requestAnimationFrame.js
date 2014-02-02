/*! jQuery requestAnimationFrame - v0.1.3pre - 2016-02-03
* https://github.com/gnarf37/jquery-requestAnimationFrame
* Copyright (c) 2016 Corey Frang; Licensed MIT */

// UMD factory https://github.com/umdjs/umd/blob/master/jqueryPlugin.js
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function (jQuery) {

// requestAnimationFrame polyfill adapted from Erik Möller
// fixes from Paul Irish and Tino Zijdel
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating


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

}));
