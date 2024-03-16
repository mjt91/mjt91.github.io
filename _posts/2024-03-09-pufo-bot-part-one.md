---
title: "PUFO Bot Design - Part 1"
categories:
  - blog
tags:
  - python
excerpt: How a funny sketch in a podcast got me to build a twitter bot
---

I am a big fan of the [Podcast UFO Podcast][pufo-podcast].
In this german podcast [Florentin Will][florentin] and [Stefan Tieze][stefan] talk about mostly about comedy, impro and their everyday life.
What makes it really entertaining is that it is completly free of economics or politcs, which I find rare nowadays.
Sureley, there are podcasts about Harry Potter, true crime, etc. that do not cover any geopolitical events.
But most podcasts of that sort - i.e. just talking - default to making some political statements or talking about how bad the world has become.
It is refreshening so see, that there are podcasters out there that prefer to really enterain their audience.
I feel like they are really like that.

## The idea

In [epidose no. UFO263 - Zufall][episode] Florentin tells that he want in a deep rabbit hole of randomness.
He spent his Saturday evening creating random names on some website and went on creating random book titles from another website.

It turned out in a beautiful impro sketch where Florentin and Stefan played out a episode of ["Das literarische Quartett"][quartett-wiki]. There are many, many videos of it up on [YouTube][quartett-ty].
For anyone interested in literature this is a great ressource (and for those who are speaking german of course 😁).

At the end of the episode Florentin posed the idea: How great would it be, if there exists a bot that creates top litertature lists with randomly created book titles and authors?

Then it struck me: Why not build it?

## The books
Getting hold of randomly created book titles is not to hard to come by.
A quick google search gave me the perfect result: [buchtitelgenerator.de][buchtitel-generator].
Exactly what I was looking for.

As the time of writing this I am getting this result:

1. Eine britische Kehle mit Sorge
2. Stock ohne Sonne
3. Desillusionierte Geburten in der Mitte
4. Der Müller der Adjutanten
5. Farbenfrohe Nixen der Stelle

Interestingly the site even tells you the *algorithm* it uses to create the titels.
It says above the list

>Aus 1194 Substantiven und 1011 Adjektiven werden jeweils fünf Buchtitel zufällig erzeugt.

Which translates to *"Creating 5 random book titles using 1194 substantives and 1011 adjectives."*

My idea was simple: Build a webscraper and call the site and scrape the table with titles.

**But:** I am a fair player. Can I simply use the titles? What about copywrite?
I contacted the owner and asked politely if his site offers a public REST API endpoint and if I can use the generated titles for a side project.

I did not think he would answer. Maybe, I thought, the idea might die in an early stage.

But no! Surprisingly: Got I an answer! And a positive one indeed.
He wrote:

>Hallo Marius,
>
>derzeit gibt es leider noch keine REST API vom Buchtitelgenerator, ist aber eine gute Idee. Nur werde ich vor Herbst nicht dazu kommen...
>
>Die Nutzung und Verwendung der Buchtitel vom Buchtitelgenerator (z.B. Twitter) ist unter Nennung der Quelle buchtitelgenerator.de gerne möglich.
>
>Beste Grüße, Peer

English tl;dr: No REST API yet (nice idea though). Feel free to use the titles if you give credit.

## The authors

Funnily enough: Names posed to be a bigger problem than I anticipated.
But thinking about it for a while: Names are quite special.
Very different in different places around the world.
For this project I need quite ordinary names. Since all the book titles are in German the random authors should be *sounding german* but it would be great if they sound at least a bit exciting.

### randomname.de
<!-- First, I had a promising candiadate for the randomname source. -->
A quick google search gave me a convenient looking source for the random author names as well: [randomname.de][randomname]. Note that this link will direct to the archived version of the site, as it is down since end of 2022.

Unfortunately, the site was not really reachable exactly after I build the module to retrieve the names from their API.

There were two problems: First, you could query the api for multiple names at once. But often it returned the same name multiple times in the returned `json`. 

There was an ever bigger problem. In open sight: The site was not reliable. Offline. Gone. This posed a problem. Where to go and get the names now from?

### Opendata
It was not possible to rely on some api so what is left was to get my hand dirty and build a data set on my own. Surpisingly easy were surnames. Quick search and I found a [file `nachnamen.txt`][nachnamen-txt] in a github rep from [HBehrens][hbehrens]. The data is quite simple: ~10k names split by a newline `\n`.
50% of names DONE. Great.

Going on with first names. This was not as easy.
I chose to use newborn names from [OffeneDaten-Köln][offene-daten].
For this I chose the five starting from 2010 to 2014.
When I started they had single files per year. Seems like they refactored the files into two big ones:

1. 2010-2018
2. 2019-2022

Fortunately I still have the old files (there were commited to the repo). Here is a quick look inside 2010's file:

```csv
vorname,anzahl,geschlecht
Marie,300,w
Sophie,239,w
Maximilian,169,m
Maria,161,w
Alexander,148,m
```

A simple `.csv` file with three columns: first name, count and sex.
For instance above there were 300 new born with the name Marie. This  makes sense, since this is ranking number one on the list of most common names in Germany for a long time.

Next step was to boot up a good old Jupyter notebook, import pandas and merge all the csv-files into one.[^1]
The result is [quite a long list of ~25.5k lines of names][first-names-file].

[^1]: *At first I used the merged file as it is. Only after I created a few random book-author-combinations I found that the name distribution is quite skewed. I got plenty books with first-name Marie and other very common names. Only after I dropped all duplicates the list became usable for my use-case.*

## Twitter API

Setting up a new [twitter account][pufo-bot-twitter] and setting up the connection was well documented as well.

Things got a bit fuzzy when [Elon bought tiwtter][elon-twitter] because they changed some things around. In the end I needed to use another authentication method and this settled it.

## Deployment
Once I build the bot with the help of [tweepy python package][tweepy]. I put the dock on my [raspberry pi][raspberry-pi] and schdule a cron job to run it every Friday at 9 a.m. CET.

Only recently I looked into deploying it via Docker. This is working like a charm for now, but not yet merged into my master branch.

## Conclusion
The bot is live at [@BotPufo][pufo-bot-twitter] on X (fka twitter).
The repo can be found on [Github.com][pufo-bot-repo].

A really fun project and I have many ideas how go on with it. Also in the domain of large language models.
Given I find the time.
And always hoping that [my source for the random books][buchtitel-generator] will not shut down.


[buchtitel-generator]: https://buchtitelgenerator.de/generator/
[florentin]: https://de.wikipedia.org/wiki/Florentin_Will
[stefan]: https://de.wikipedia.org/wiki/Stefan_Titze
[pufo-podcast]: https://podcast-ufo.fail/
[episode]: https://pufopedia.info/wiki/UFO263_Zufall
[quartett-wiki]: https://de.wikipedia.org/wiki/Das_Literarische_Quartett
[quartett-ty]: https://www.youtube.com/results?search_query=literarische+quartett
[randomname]: https://web.archive.org/web/20230127135402/https://randomname.de/
[offenedaten-koeln]: https://offenedaten-koeln.de/
[nachnamen-txt]: https://github.com/HBehrens/phonet4n/blob/master/src/Tests/data/nachnamen.txt
[hbehrens]: https://github.com/HBehrens
[offene-daten]: https://offenedaten-koeln.de/dataset/vornamen
[first-names-file]: https://github.com/mjt91/pufo-twitter-bot/blob/main/src/pufo_twitter_bot/data/first-names-merged.csv
[elon-twitter]: https://www.nytimes.com/2022/10/27/technology/elon-musk-twitter-deal-complete.html
[pufo-bot-twitter]: https://twitter.com/BotPufo
[pufo-bot-repo]: https://github.com/mjt91/pufo-twitter-bot
[tweepy]: https://www.tweepy.org/
[raspberry-pi]: https://www.raspberrypi.com/products/raspberry-pi-4-model-b/
