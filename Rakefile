require 'rbconfig'
include RbConfig

task :default => :dev

desc 'Clean up generated site'
task :clean do
  cleanup
end

desc 'Start server with --auto'
task :dev => :clean do
  jekyll_compass
end

# Check for Windows vs OSX
def cleanup
  case CONFIG['host_os']
    when /mswin|windows/i
      sh 'rmdir /S /Q _site'
    when /linux|arch/i
      # Linux
    when /sunos|solaris/i
      # Solaris
    when /darwin|mac os/i
      sh 'rm -rf _site'
    else
      # whatever
  end
end

def jekyll(opts = '')
  sh 'jekyll ' + opts
end

def compass(opts = '')
  sh 'compass compile -c config.rb --force ' + opts
end

def jekyll_compass
  sh 'jekyll serve --watch & compass watch'
end