/*! jQuery requestAnimationFrame - v0.0.0 - 2012-08-11
* https://github.com/gnarf37/jquery-requestAnimationFrame
* Copyright (c) 2012 Corey Frang; Licensed MIT */

(function( $ ) {

var animating,
	requestAnimationFrame = window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame;

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
