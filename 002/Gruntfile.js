module.exports = function(grunt) {
	grunt.initConfig({
		banner: '/* Created by Artyom Kravchenko, <%= grunt.template.today("yyyy") %> */\n',
		jade: {
			compile: {
				files: [{
					cwd: 'dev/jade/',
					src: ['*.jade', '!particials*.jade'],
					dest: 'dest',
					expand: true,
					ext: '.html',
				}]
			},
			options: {
				pretty: true,
			}
		},
		stylus: {
			options: {
				banner: '<%= banner %>',
				use: [
					function() {
            			return require('autoprefixer-stylus')('last 2 versions', 'ie 8', 'ie 9');
            		},
					require('csso-stylus'),
				]
			},
			compile: {
				files: [{
					cwd: 'dev/stylus/',
					src: '*.styl',
					dest: 'dest/css',
					expand: true,
					ext: '.css',
				}]
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'dev/img',
					src: ['*.{jpg, png, gif}'],
					dest: 'dest/img',
				}]
			}
		},
		connect: {
			server: {
				options: {
					port: 3000,
					base: 'dest',
					hostname: "0.0.0.0",
					livereload: true,
				}
 			}
		},
		watch: {
			options: {
				livereload: true,
			},
			jade: {
				files: ['dev/jade/*.jade'],
				tasks: ['newer:jade'],
			},
			stylus: {
				files: ['dev/stylus/*.styl'],
				tasks: ['newer:stylus'],
			},
			imagemin: {
				files: ['dev/img/.{jpg, png, gif}'],
				tasks: ['newer:imagemin'],
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-newer');

	grunt.registerTask('default', [
		'connect',
		'jade',
		'stylus',
		'imagemin',
		'watch'
	]);
}