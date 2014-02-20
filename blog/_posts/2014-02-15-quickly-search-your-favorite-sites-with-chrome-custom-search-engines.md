---
layout: post
date: 2014-02-15
title: How to Create Custom Search Engines in Chrome
teaser: Quickly search your favorite sites in the Chrome Search Bar.
tags: lifehack
---

If you use Chrome, you probably do a lot of Google Searching from the address bar (which Chrome calls the omnibox). What if you want to search just wikipedia? You could type wikipedia, a space, and your search, but there is an easier way.

###Edit default search engines
Click on the Settings Icon, then Settings. On the settings page, click the **Manage search engines...** button under **Search** ([see here if you need help](https://support.google.com/chrome/answer/95653?hl=en)).

In the popup, you should see a set of **Default search settings** that may include Yahoo!, Bing, Ask, and AOL. You may also see some options in **Other search engines**. Let's start with something easy to see how this feature works.

If you want to use bing search, go into the omnibox (address bar) and type bing.com, then space or tab. The omnibox now indicates what search engine you are using with a blue **Search Bing:** box.

<img class="frame" src="/img/2014/02/search-bing.png">

Search for something and you will be directed to Bing search results.

<img class="frame" src="/img/2014/02/bing-search-results.png">

But it is pretty inefficient to have to type **bing.com**. wouldn't it be better to type **bing**, or just **b**?

###Change the search keyword
Go back to the **Manage Search Engines** and change the keyword. While we're at it, let's change some other keywords and remove the search engines we will never use.

<img class="frame" src="/img/2014/02/change-search-keyword.png">

###Adding custom search engine
This takes a little bit of trickery. First, we need to get the url for the search we want to use. As an example, I am going to use [canistream.it](http://www.canistream.it), a free service that searches major content providers like Netflix, Redbox, Amazon, Google Play, Hulu Plus, etc and tells you whether you can stream (rent or buy) a movie or tv show, and how much it costs with each service. I highly recommend it and now, it will be even easier to search!

Go [www.canistream.it](http://www.canistream.it) and search for something. Then look in the address bar and to see how this particular site search works.

<img class="frame" src="/img/2014/02/canistreamit-search.png"> 

####Get the site's search url
We can see that the url is **www.canistream.it/search/movie/**, then the search query. Copy this string. Now go back to **Manage Search Engines** and scroll to the bottom.

**Be warned**, adding a search engine is very finnicky. If you navigate away while adding one, it will wipe the inputs, so we need to do it all in one clean sweep.

Add the name of the search engine, the keyword, and the url we just copied. At the end of the url, add **%s** which is a placeholder for the search query. **Make sure you press Enter to submit the search engine.**

<img class="frame" src="/img/2014/02/creating-a-custom-search.png">

####Search with your custom engine
Now try searching using your custom search engine. In the omnibox, type your keyword (in this case, canistream.it) and press tab and type in your search. BOOM! Custom search.

###Search a site but use Google's search
One other thing we may want to do is search a site but use the standard Google search results page. Let's say we want to see only [Stack Overflow](http://www.stackoverflow.com) answers to questions. 

**{google:baseURL}search?q=site:stackoverflow.com+%s**

Copy this line but replace the section after **site:** with whatever site you want to search.

Finally, enjoy your new, amazing search capabilities!

