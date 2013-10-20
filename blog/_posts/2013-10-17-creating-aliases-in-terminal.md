---
layout: post
date: 2013-10-17
title: Creating Aliases in Terminal (Mac)
teaser: Speed up Terminal with shortcuts.
---

Navigating to specific folders from the command line is tedious. Luckily, there is a simple way to create your own custom shortcuts to specific folders. They are called aliases.

First, open up the Terminal app, located at Applciations > Utilities > Terminal.

<img class="frame" src="/img/terminal-alias.png">

Next, you need to open .bash_profile and add your aliases. .bash_profile runs every time you open Terminal, so adding aliases to this file will let you use them any time you open Terminal.

{% highlight bash %}
nano .bash_profile
{% endhighlight %}

*nano is a text editor that is built in to Terminal. There are a few others, but nano is simple and will do the trick.*

Add your alias by typing:

{% highlight bash %}
alias myproject='cd ~/path/to/myproject'
{% endhighlight %}

So we've added an alias to .bash_profile, but we can't use it until we refresh the file. In Terminal, type

{% highlight bash %}
source .bash_profile
{% endhighlight %}

Now, when you type

{% highlight bash %}
myproject
{% endhighlight %}

and hit return, you instantly navigate to the folder. Aliases aren't limited to folders. Whatever you put inside the single quotes is esentially injected into the Terminal window and executed.

So you could create

{% highlight bash %}
alias aliases='nano .bash_profile'
{% endhighlight %}

or 

{% highlight bash %}
alias gs='git status'
{% endhighlight %}
