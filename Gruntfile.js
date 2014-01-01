module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            json: {
                src: ['*.json'],
                dest: 'dist/concat.json',
                options: {
                    // Added to the top of the file
                    banner: '{"links": [',
                    // Will be added at the end of the file
                    footer: "]}",
                    separator: ','
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat']);

};