'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        watch: {
            tests: {
                files: ['tests/**/*.js'],
                tasks: ['jshint', 'karma']
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                ignores: [
                ]
            },
            all: [
                'Gruntfile.js',
                'tests/**/*.js'
            ]
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }

    });


    grunt.registerTask('test', [
        'jshint',
        'karma'
    ]);


    grunt.registerTask('default', [
        'test',
        'watch'
    ]);
};