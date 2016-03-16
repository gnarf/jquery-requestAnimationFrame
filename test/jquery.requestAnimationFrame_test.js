( function() {
	"use strict";

	QUnit.module( "jQuery.requestAnimationFrame" );

	QUnit.test( "Animations still work", 1, function( assert ) {
		var done = assert.async();

		jQuery( "<div>" ).appendTo( "#qunit-fixture" ).animate( {
			width: 80
		}, {
			duration: 100,
			complete: function() {
				assert.equal( jQuery( this ).width(), 80, "Width is 80" );
				done();
			}
		} );
	} );

}() );
