module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint : {
      src : 'src/index.js'
    },
    uglify: {
      options: {
        banner: '/**\n' +
          ' * <%= pkg.description %>\n' +
          ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          ' * @website <%= pkg.homepage %>\n' +
          ' * @link <%= pkg.repository.url %>\n' +
          ' * @author <%= pkg.author %>\n' +
          ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
          ' */\n'
      },
      build: {
        // src: 'src/<%= pkg.name %>.js',
        src: 'src/index.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  // grunt.registerTask('default', ['jshint','uglify']);
  grunt.registerTask('default', ['uglify']);

};