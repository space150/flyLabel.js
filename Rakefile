PROJECT_ROOT = `git rev-parse --show-toplevel`.strip

namespace :js do
    desc "Build files for distribution."
    task :build do
        cd PROJECT_ROOT
        sh "uglifyjs src/main.js -o dist/floatLabel.js -c -m"
    end
end

namespace :demo do
    desc "Build the demo"
    task :build do
        puts "TODO: build the demo"
    end
end
