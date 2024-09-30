---
title: Transforming my Master Thesis into an AI Podcast
categories:
  - blog
tags:
  - generative-ai
  - finance
excerpt: Playing around with Googles Notebook LM
---

This weekend during my gardening duties I listened to [Super Data Science Pocast][super-data-science-podcast].
Host Jon Krohn transformed his Phd thesis using [Googles Notebook LM][notebook-lm] and let it play for the last 12 minutes of episode 822.

And what so say? It really sounds like modern podcast you get - admittedly - a lot on Spotify or Apple Podcasts.
Nevertheless it has exceptional quality and for me personally a great showcase of generative AI 
(ChatGPT is almost 2 years old now, and we still looking for the big impact use cases, but thats a story for another time.).
The two hosts behave exactly like two _real_ podcast hosts.

I decided to play around with it and transformed my own Master Thesis into a podcast.
As it would be quite boring to simply post an link or audio player in this post, I went a step further and ran the finished product through [recast-studio][recast-studio] to create audiograms of some highlights.
Unfortunately recast does only allow you to create two audiograms with the free version.

Check out these two highlights from the podcast:

<div style="text-align: center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/c9jxLrzZBnE?si=TlrqFrJBaxJG8NG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Sounds great, doesn't it? Here is another highlight:

<div style="text-align: center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/9Ju3IEVHqPM" title="A Handful of Factors: Size Premium Surprise in the German Stock Market" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

One lesson learned: uploading to [youtube now converts shorter videos always to youtube-shorts][yt-short-1], [if you not set the resolution to 16:9][yt-short-2].

This was not the first time I heard about notebooklm. This week someone at work already pointed me to this service.

If the highlights catched your attention, for anyone who wants to listen to the full _conversation_ here it is (a 11:43 minutes listen):
 
[A Handful of Factors: Applying the Fama-French-Five-Factor-Model to the German Stock Market][handful-of-factors-podcast]

**Note that the source file was my ~100 pages long Master thesis in _German_.**
Exactly: in German. To me it was really surprising that not only the podcast did mention that the _research_ was a german publication, but they also covered almost all topics insights from my work.

Notebooklm has more abilities, one is to create a summary of the uploaded file:

## Summary
> The source is a master's thesis that deals with the construction and application of the Fama-French five-factor model for the German stock market. The thesis is divided into five chapters: After an introduction outlining the research question, the limitations of the thesis and the structure, the second chapter explains the theoretical foundations, in particular the history of modern portfolio theory, the CAPM and the Fama-French three-factor model. The third chapter presents the methodology of the work, which focuses on the data basis, the construction of the risk factors and the formation of regression portfolios. Chapter four is dedicated to the regression analysis and hypothesis tests, whereby the performance of the five-factor model is examined using the GRS statistics and the regression alphas. Finally, the results of the thesis are summarized and discussed in chapter five, which also provides an outlook on further research opportunities. The aim of the thesis is to examine the influence of the Fama-French five-factor model on the German stock market and to evaluate the possibility of its application in practice.

The translation was initially in German (I guess they use the language from the original source). The quote above is the summary after I ran it through deepl.

As the time of writing this, interstingly Simon Willison mentioned, that the [NotebookLM is surprisingly effecting in creating attention-grabbing poodcasts][simon-willison]. 


[super-data-science-podcast]: https://www.superdatascience.com/podcast/822
[notebook-lm]: https://notebooklm.google.com/
[handful-of-factors-podcast]: https://notebooklm.google.com/notebook/e5403eec-df52-4b92-bfe1-d3078e3eeee7/audio
[recast-studio]: https://app.recast.studio/create/
[yt-short-1]: https://www.quora.com/How-can-you-stop-YouTube-turning-your-videos-into-shorts
[yt-short-2]: https://www.reddit.com/r/youtube/comments/xtsl8e/why_wont_my_video_become_a_short_i_set_it_to_9_16/
[simon-willison]: https://simonwillison.net/2024/Sep/29/notebooklm-audio-overview/
