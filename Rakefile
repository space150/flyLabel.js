PROJECT_ROOT = `git rev-parse --show-toplevel`.strip

namespace :js do
    desc "Build files for distribution."
    task :build do
        cd PROJECT_ROOT
        sh "uglifyjs src/main.js -o dist/flyLabel.min.js"
    end
end

namespace :demo do
    desc "Build the demo"
    task :build do
        cd PROJECT_ROOT
        sh "demo/build > index.html"
    end
end
