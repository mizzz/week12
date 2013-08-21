module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	cssmin: {
  		combine: {
		 files: {
     	 'public/css/main.min.css': ['assets/css/two.css','assets/css/demo.css']//'path/to/input_one.css', 'path/to/input_two.css',
   		 }
 		}
	},
	markdown: {
    all: {
      files: [
        {
          expand: true,
          src: '*.md',
          dest: 'public/html/',
          ext: '.html'
        }
      ]
    }
  }
		});
		
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-markdown');

  // Default task(s).
  grunt.registerTask('default', ['cssmin','markdown']);

};