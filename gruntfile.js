

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/css/<%= pkg.name %>.css': 'client/css/site.scss'
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
            files: ['client/css/**/*.scss', 'client/js/**/*.js'],
            tasks: ['sass', 'concat', 'uglify'],
            options: {
                spawn: false,
                event: ['added', 'changed']
            }
        },
        concat: {
            options: {
                seperator: ';'
            },
            dist: {
                src: 'client/js/**/*.js',
                dest: 'public/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'public/js/<%= pkg.name %>.min.js': ['<%- concat.dist.dest %>']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass', 'sass:bootstrap', 'concat', 'uglify']);
    grunt.registerTask('build', ['sass', 'sass:bootstrap', 'concat', 'uglify']);
    grunt.registerTask('node', ['nodemon']);

    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
};