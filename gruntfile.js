

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/css/site.css': 'public/css/site.scss'
                }
            },
            bootstrap: {
                files: {
                    'public/css/bootstrap.css': 'public/lib/bootstrap/scss/bootstrap.scss'
                }
            },
            bootstrapgrid: {
                files: {
                    'public/css/bootstrap-grid.css': 'public/lib/bootstrap/scss/bootstrap-grid.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 3 versions', 'ie 9', 'ie 10', 'ie 11']
            },
            no_dest_single: {
                src: 'public/css/bootstrap-grid.css'
            }
        },
        nodemon: {
            all: {
                script: 'server.js',
                options: {
                    watchedExtensions: ['js']
                }
            }
        },
        watch: {
            files: ['public/css/*.scss'],
            tasks: ['sass'],
            options: {
                spawn: false,
                event: ['added', 'changed']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['nodemon']);
    grunt.registerTask('build', ['sass', 'sass:bootstrap']);

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};