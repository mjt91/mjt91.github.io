---
title: Transforming my Master Thesis into an AI Podcast
categories:
  - blog
tags:
  - generative-ai
  - finance
excerpt: Playing around with Googles Notebook LM
---

This weekend, while tending to my garden, I tuned in to the [Super Data Science Podcast][super-data-science-podcast].
Host Jon Krohn did something intriguing—he transformed his PhD thesis using [Google's Notebook LM][notebook-lm] and showcased the result during the last 12 minutes of episode 822.

And how did it sound? Just like a modern podcast, the type you commonly find on platforms like Spotify or Apple Podcasts. However, the quality was exceptional, and for me, it served as a fantastic demonstration of generative AI.
ChatGPT is nearly two years old, yet we're still searching for those game-changing use cases—but that's a discussion for another time.

The two hosts in the podcast sounded like they were real people, not AI-driven avatars.
This inspired me to experiment with the tool myself and turn my own Master's thesis into a podcast. And here it is:

<audio controls> 
  <source src="https://drive.google.com/uc?export=download&id=1buQDWQnzQWaiDpNIdIp38hB17sLaLLVD" type="audio/wav"> 
  Your browser does not support the audio element.
</audio>

## A step further: Audiograms

Rather than just embedding an audio link here, I wanted to take it further. So, I used [Recast Studio][recast-studio] to reate audiograms, highlighting some of the best parts. They have an _ai driven helper functionality_ to find the number of highlights and mark it in the transskript, very handy! Unfortunately, the free version only allows you to make two audiograms for a maximum of two minutes each.

Check out these two highlights:

<div style="text-align: center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/c9jxLrzZBnE?si=TlrqFrJBaxJG8NG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Sounds great, doesn't it? Here is another highlight:

<div style="text-align: center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/9Ju3IEVHqPM" title="A Handful of Factors: Size Premium Surprise in the German Stock Market" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### Side-note on YouTube Shorts

One interesting lesson learned: uploading shorter videos to YouTube now automatically converts them into YouTube Shorts unless you set the resolution to 16:9. It's something to keep in mind for future projects. [Some people seem not to like it][yt-short-1] and [other are stumbled but found a work-around it][yt-short-2].

## Deep Dive: Exploring Google's NotebookLM

This wasn't the first time I'd heard of Notebook LM. Earlier this week, a colleague at work mentioned the service. After playing with it myself, I'm quite impressed by its ability to turn complex documents into dynamic audio content.

For anyone interested hear for yourself above.

### How did it perform?

An interesting thing to note here: the source file was my Master's thesis, about 100 pages long and written in German!
Exactly: German. To my surprise, the podcast not only acknowledged that the original research was a German publication, but it also managed to capture almost all key insights from my thesis. And to top it off, NotebookLM also generated a summary of the uploaded file. Here's a translated excerpt:

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
