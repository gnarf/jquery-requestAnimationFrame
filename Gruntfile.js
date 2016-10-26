"use strict";

module.exports = function( grunt ) {

	// Project configuration.
	grunt.initConfig( {
		pkg: grunt.file.readJSON( "package.json" ),
		replace: {
			all: {
				src: [ "src/<%= pkg.name %>.js" ],
				dest: "dist/",
				replacements: [
					{
						from: "@VERSION",
						to: "<%= pkg.version %>"
					},
					{
						from: "@YEAR",
						to: "<%= grunt.template.today('yyyy') %>"
					}
				]
			}
		},
		qunit: {
			all: [ "test/**/*.html" ]
		},
		eslint: {
			options: {

				// See https://github.com/sindresorhus/grunt-eslint/issues/119
				quiet: true
			},
			all: {
				src: [ "Gruntfile.js", "src/**/*.js", "test/**/*.js" ]
			}
		},
		watch: {
			files: [ "<%= eslint.all.src %>" ],
			tasks: [ "lint", "qunit" ]
		},
		uglify: {
			all: {
				files: {
					"dist/<%= pkg.name %>.min.js": "dist/<%= pkg.name %>.js"
				}
			},
			options: {
				preserveComments: false,
				sourceMap: true,
				ASCIIOnly: true,
				sourceMapName:
					"dist/<%= pkg.name %>.min.map",
				report: "min",
				beautify: {
					"ascii_only": true
				},
				banner: "/*! jQuery requestAnimationFrame - <%= pkg.version %> - " +
					"<%= grunt.template.today('yyyy-mm-dd') %>\n" +
					"<%= pkg.homepage ? '* ' + pkg.homepage + '\\n' : '' %>" +
					" * Copyright (c) <%= grunt.template.today('yyyy') %> " +
					"<%= pkg.author.name %>; Licensed <%= pkg.license %> */"
			}
		}
	} );

	// Load grunt tasks from NPM packages
	require( "load-grunt-tasks" )( grunt );

	// Default task.
	grunt.registerTask( "default", [ "eslint", "qunit", "replace", "uglify" ] );

};
