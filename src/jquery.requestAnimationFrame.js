/*
 * jquery.requestAnimationFrame
 * https://github.com/gnarf37/jquery-requestAnimationFrame
 * Requires jQuery 1.8+
 *
 * Copyright (c) 2012 Corey Frang
 * Licensed under the MIT license.
 */

(function( $ ) {

var animating,
	requestAnimationFrame = window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame;

function raf() {
	if ( animating ) {
		requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

if ( requestAnimationFrame ) {

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
