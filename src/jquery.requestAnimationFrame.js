/*
 * jquery.requestAnimationFrame
 * https://github.com/gnarf37/jquery-requestAnimationFrame
 * Requires jQuery 1.8+
 *
 * Copyright (c) 2012 Corey Frang
 * Licensed under the MIT license.
 */
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
