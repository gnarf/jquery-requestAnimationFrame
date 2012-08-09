/*! jQuery requestAnimationFrame - v0.0.0 - 2012-08-09
* https://github.com/gnarf37/jquery-requestAnimationFrame
* Copyright (c) 2012 Corey Frang; Licensed MIT */

(function( $ ) {

// FireFox apparently doesn't like using this from a variable...
window.requestAnimationFrame = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame;

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
