module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-html-snapshot');

  grunt.initConfig({
    htmlSnapshot: {
      all: {
        options: {
          snapshotPath: '/app/snapshots/',
          sitePath: 'http://localhost:9000',
          urls: ['#!', '#!/page/a-propos', '#!/page/preservation-golfe'],
          
        }
      }
    }
  });

  grunt.registerTask('default', ['htmlSnapshot']);
};
