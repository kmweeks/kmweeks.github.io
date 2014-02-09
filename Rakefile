task :default => :dev

desc 'Clean up generated site'
task :clean do
  cleanup
end

task :build do
  system('mkdir -p build; ls *.rb | while read file; do cat $file; echo ""; done > build/jekyll_lunr_js_search.rb')
end

# desc 'Build site with Jekyll'
# task :build => :clean do
#   compass
#   jekyll('build')
# end

desc 'Start server with --auto'
task :dev => :clean do
  jekyll_compass
end

def cleanup
  case %x{ver}
    when /Microsoft Windows/
      sh 'rmdir /S /Q _site'
    else
      sh 'rm -rf _site'
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