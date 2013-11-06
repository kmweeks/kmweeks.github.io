task :default => :dev

desc 'Clean up generated site'
task :clean do
  cleanup
end

desc 'Build site with Jekyll'
task :build => :clean do
  compass
  jekyll('build')
end

desc 'Start server with --auto'
task :dev => :clean do
  jekyll_compass
end

def cleanup
  sh 'rm -rf _site'
end

def jekyll(opts = '')
  sh 'jekyll ' + opts
end

def compass(opts = '')
  sh 'compass compile -c config.rb --force ' + opts
end

def jekyll_compass
  sh 'compass watch & jekyll serve --watch'
end