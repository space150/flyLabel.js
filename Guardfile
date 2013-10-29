# A sample Guardfile
# More info at https://github.com/guard/guard#readme
#
require 'guard/plugin'

module ::Guard
    class FloatGuard < ::Guard::Plugin
        def run_all
            true
        end
        def run_on_change(paths)
            puts "CHANGES @ #{Time.now}"
            puts "Compiling..."
            puts `./build`
            puts "DONE"
        end
    end
end

guard :floatguard do
    watch(%r{src/*.})
end
