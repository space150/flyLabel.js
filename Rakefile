PROJECT_ROOT = `git rev-parse --show-toplevel`.strip

namespace :js do
    desc "Build files for distribution."
    task :build do
        cd PROJECT_ROOT
        sh "uglifyjs src/main.js -o dist/floatLabel.js -c -m"
    end
end
