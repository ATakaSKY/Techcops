//The "wrapper" function
module.exports = function(grunt) {

	//Project and task configuration
	grunt.initConfig({
  	     pkg: grunt.file.readJSON('package.json'),

  	     sass: {
	        options: {
	            sourceMap: false
	        },
	        dist: {
	            files: {
	                'css/styles.css': 'assets/scss/styles.scss'
	            }
	        }
    	},
    	watch: {
		    sass: {
		      files: ['assets/scss/**/*.scss'],
		      tasks:['sass']
		    },
		    scripts:{
		    	files: ['assets/js/*.js'],
		        tasks:['uglify']
		    }
		  },
		  uglify:{
		  	my_target:{
		  		files:{
		  			'js/scripts.js':['node_modules/jquery/dist/jquery.js','assets/js/scripts.js']
		  		}
		  	}
		  }
	});


	//Loading Grunt plugins and tasks
	require('load-grunt-tasks')(grunt);


	//Custom tasks
	grunt.registerTask('default', ['watch']);



}