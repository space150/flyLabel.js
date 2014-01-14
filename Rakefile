PROJECT_ROOT = `git rev-parse --show-toplevel`.strip

task :build do
    cd PROJECT_ROOT
    sh "uglifyjs src/main.js -o dist/flyLabel.min.js"
end
