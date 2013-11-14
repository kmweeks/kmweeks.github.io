---
layout: post
date: 2013-11-13
title: Set up Wordpress Locally with MAMP (Free)
teaser: Run Wordpress locally using MAMP
---

##Step 1
Download [Wordpress](http://wordpress.org/download/). Extract the zip and place the folder wherever you normally work on web sites - something like /User/username/Projects/wordpress

##Step 2
Download [MAMP](http://www.mamp.info/en/downloads/). MAMP automatically comes with MAMP Pro (a free trial), but we can do everything we need without having to pay for MAMP Pro.

##Step 3
Open Applications/MAMP/conf/apache/httpd.conf in your text editor of choice.

<img class="frame" src="/img/mamp-httpd-conf.png">

Scroll to the bottom and add a virtual host entry using the proper path to your wordpress folder **(DocumentRoot)** and a url of your choosing **(ServerName)**.

{% highlight aconf %}
<VirtualHost *:80>
  DocumentRoot "/Users/thetallweeks/Projects/wordpress"
  ServerName local.wordpress
<VirtualHost>
{% endhighlight %}

<img class="frame" src="/img/mamp-httpd-conf-virtual-host.png">

The **:80** in VirtualHost indicates **port 80**. We'll also set this value in MAMP's preferences later.

##Step 4
Add a new entry to your hosts file. Open **Terminal** and type:

{% highlight bash %}
sudo nano /etc/hosts
{% endhighlight %}

Go to the bottom of the file and add an entry:

{% highlight bash %}
127.0.0.1 local.wordpress
{% endhighlight %}

<img class="frame" src="/img/mamp-new-host-entry.png">

Now open MAMP and go into Preferences. Set the **Apache Port** to 80 (to match the VirtualHost Entry) and click OK.

<img class="frame" src="/img/mamp-preferences-port.png">

##Step 5
We're getting close. Now Click **Open Start Page**, then **phpMyAdmin** at the top of the page. It should take you here:

<img class="frame" src="/img/mamp-php-myadmin.png">

Click **databases**, then create a new database. I named mine "wordpress".

<img class="frame" src="/img/mamp-new-database.png">

In MAMP, click Stop Servers. Wait until both dots turn red, then click Start Servers. This ensures our recent changes take effect.

##Step 6
Almost done! Now go to http://local.wordpress, or whatever you set as the name for your virtual host entry. Step through the wordpress setup (it is pretty straightforward). 

<img class="frame" src="/img/mamp-wordpress-config.png">

Your database name is whatever you called the database in phpMyAdmin. By default, the user name and password for the database are **root** and **root**. Lastly, create your Wordpress admin user. 

<img class="frame" src="/img/mamp-wordpress-install.png">

Don't forget to uncheck "Allow search engines to index this site." And there you go. You now have Wordpress running on your local machine. 

You can even set up other wordpress sites by **creating separate VirtualHost entries** in httpd.conf and /etc/hosts and creating separate databases.

The best part is, you did it all for free!