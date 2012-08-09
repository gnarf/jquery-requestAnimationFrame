/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

	module('jQuery.requestAnimationFrame');

	asyncTest( "Animations still work", 1, function() {
		jQuery( "<div>" ).appendTo( "#qunit-fixture" ).animate({
			width: 80
		},{
			duration: 100,
			complete: function() {
				equal( jQuery( this ).width(), 80, "Width is 80" );
				start();
			}
		});
	});

}(jQuery));
