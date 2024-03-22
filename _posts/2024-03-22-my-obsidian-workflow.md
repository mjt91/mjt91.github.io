## Obsidian is great
I am a big fan of simplicity.
Plain text is simple.
No wonder I am a big fan of [Obsidian](https://obsidian.md/).
It is a beautiful piece of software.
[Andrej Karpathy](google.com) agrees:

>[!quote]
>LINK TO TWEET HERE

To be fair it [is by far not perfect]([Properties: let the user customize the way Dates/Times are displayed (independently from OS) - Feature requests - Obsidian Forum](https://forum.obsidian.md/t/properties-let-the-user-customize-the-way-dates-times-are-displayed-independently-from-os/64139/58)) but it does what I want it to do.

I always was impressed with the idea of a [digital garden]([How to set up your own digital garden - Ness Labs](https://nesslabs.com/digital-garden-set-up)) or the [zettelkasten system]([Zettelkasten – PKM Zettelkasten](https://zk.zettel.page/zettelkasten)).
2024 marked the time I decided to try it on my own.
Most notes I take at work. As the time of writing I am working at a large German company where the primary OS is Windows I defaulted to use [OneNote]([Microsoft OneNote | Die App für digitale Notizen für Ihre Geräte](https://www.onenote.com/?public=1&omkt=de-DE)). Also since my colleagues shared books with each other all the time.

I was never a fan of OneNote. In fact[ many people dislike it]([Windows 10 OneNote app sucks. - Microsoft Community](https://answers.microsoft.com/en-us/msoffice/forum/all/windows-10-onenote-app-sucks/bcf7aea9-5123-4fba-8301-8b7a2db47083)). For me there are many reasons: the UI is cluttered, most functionalities I simply do not need, text formatting can be a pain (you can paste whatever & wherever you like in a document). It gets points for very quick search and integration capabilities for other M365 products though.

Obsidian makes it just very easy. Simple text files. It has something puristic about it.
Not to forget that switching from obsidian to some other tool like [vim for note-taking ]([The Holy Grail of Neovim Note Taking - YouTube](https://www.youtube.com/watch?v=5ht8NYkU9wQ))should be a breeze.

## How I take my Notes
I am trying to follow a zero-effort zettelkasten system.
There are so many ways how to organize it and[ one systems looks more complex]([groepl/Obsidian-Templates: A repository containing templates and scripts for #Obsidian to support the #Zettelkasten method for note-taking. (github.com)](https://github.com/groepl/Obsidian-Templates)) than the next.
The [most relevant youtube videos]([zettelkasten obsidian - YouTube](https://www.youtube.com/results?search_query=zettelkasten+obsidian)) on the topic when you search for it are vastly different in complexity.

Notable mention:
-  [The Only Beginner Obsidian Video You’ll Ever Need (youtube.com)](https://www.youtube.com/watch?v=oYoHKy72Qy0)

I am not the biggest fan of over-complex systems where I need to add a note there and then a workflow starts pushing my notes somewhere else, then notion template gets created pinging my on my phone etc.
This is what most people have build, **but** then I found Artem Kirsanov and his brilliant simple take on it. See the video below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/E6ySG7xYgjY?si=JP3GiWwM--tG1fOf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

After following this I created my vault with the following structure:

```console
❯ tree -d

.notes
├── 000 Zettelkasten
├── 100 Work notes
│   ├── 15-5
│   ├── Projects
│   │   ├── **REDACTED FOR CONFIDENTIALLITY**
│   │   │   └── **REDACTED FOR CONFIDENTIALLITY**
│   │   ├── **REDACTED FOR CONFIDENTIALLITY**
│   │   └── **REDACTED FOR CONFIDENTIALLITY**
│   ├── Performance Reviews
├── 200 Blog
├── Files
├── References
└── Templates

```

Here is a rundown of what each folder is used for:

-  The `000 Zettelkasten` folder is holing my *zettels*. Also my default folder when I create a new note with <kbd>Ctrl</kbd> + <kbd>n</kbd> . 
- The `Files` folder is the default safe-directory when I paste pictures
- `References` holds all reference notes
- Templates is the Obsidian default folder holding all templates (see section templates below)

The are *non-standard folders* that do not really belong to the zettelkasten method, but I did not want to create separate vaults for my work notes (i.e. `100 Work notes`) and my blog post drafts and ideas (in `200 Blog`).
In addition I found it easier to work with sub-folders in my working directory. For instance there is a `15-5` folder where I put my [weekly 15-5 notes]([Sending weekly 5-15 updates. | Irrational Exuberance (lethain.com)](https://lethain.com/weekly-updates/)).

## My Templates
>[!todo]

I have some templates I use very often. And there comes the power of obsidian into play.
Applying a template is as easy as pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>t</kbd> . 
The power of templates is making use of the [metadata]([Properties - Obsidian Help](https://help.obsidian.md/Editing+and+formatting/Properties)) (obsidian calls this properties) and [variables]([Variables - general principles - Shell commands documentation - Obsidian Publish](https://publish.obsidian.md/shellcommands/Variables/Variables+-+general+principles)).

Here are the templates I use:

### 📖Reference Template
```markdown
---
author: 
tags:
  - literature-note
source:
---
# {{title}}

# 📒 Summary + Notes
```

When I read a paper, an article or watch a youtube video that is a potential reference I create a new note in my `References` folder and apply the template. I fill in the author and source field. Source can be a link, name or some other reference to the source.

### 📚Book Template
```markdown
---
author:
tags:
  - book
---
# {{title}}

# 🚀 The Book in 3 Sentences

# ✍️ My Top 3 Quotes

# 📒 Summary + Notes
```

Same as above just for books. I put 3 sections in there that function as a super short summary in my own words (think: [elevator speech]([Elevator pitch - Wikipedia](https://en.wikipedia.org/wiki/Elevator_pitch)) about that book).
Nice quotes I want to remember and full summary (sometime split by chapter).

### Core Zettel Idea
```markdown
---
date: {{date}} {{time}}
tags:
  - idea
---
# {{title}}


---
# References

```

This is my main template that is used when I do <kbd>Ctrl</kbd> + <kbd>n</kbd> and create a new zettel in `000 Zettelkasten`.
Very simplistic with the idea to use the references section to link to other notes and references.

### SCR Framework
```markdown
# Situation
- ==The framing of the important, recent context the audience already knows and accepts as fact.==
- ==Answering the question: *Why is this important?*==

# Complication
- ==The reason the situation requires action.==
- ==Answering the question: *What went wrong?*==
- ==Often implies the question: *What should be do about it?*==

# Resolution
- ==The action required to solve a problem (or capture an opportunity).==
- ==Answering the question: *What is the solution
```

I always have a template ready to sketch ideas or presentations following the [SCR framework]([How to use McKinsey's SCR framework (with examples) (slideworks.io)](https://slideworks.io/resources/how-to-use-McKinseys-scr-framework-with-examples)). In my professional life I found this to be an effective communication tool to have. People sometimes find it hard to define the different buckets situation, complication and resolution correctly. This is why I have added a explanation text (that will be deleted after setting up the core idea).


### Bonus: Eisenhower Matrix
```markdown
# Eisenhower Matrix ✅

### URGENT + IMPORTANT
*Do it now*
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

### URGENT, NOT IMPORTANT
*Delegate or do it after tasks above*
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

### IMPORTANT, NOT URGENT
*Decide when to do it*
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

### NOT URGENT, NOT IMPORTANT
*Do it later / Dump it*
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3
```

The [Eisenhower Matrix]([Time management - Wikipedia](https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method)) is a tool help to decide what tasks to work on. A great way to make use of it in a workshop with colleagues to define and talk about what is important!
I do not use it too often lately, but it came in handy once or twice in the last three months.

## My Plugins
I do not use many plugins.
The ones I use are little helpers to enhance my experience with obsidian.
There are a **TON** of plugins out there and some are very impressive. 

### Admonitions
Link: [javalent/admonitions: Adds admonition block-styled content to Obsidian.md (github.com)](https://github.com/javalent/admonitions)

A great little addon that adds different types of admonitions to Obsidian.
It functions basically as  different css styling of `<blockquote>` tags.
For instance I use the `> [!quote]` or `>[!todo]` a lot.

> [!quote] 
> I use quote alot

### Open-in-new tab
Link: [patleeman/obsidian-open-in-new-tab (github.com)](https://github.com/patleeman/obsidian-open-in-new-tab)

I rely on the file viewer on the left hand side alot and found it very annoying that my notes would not open in the reading pane as a new tab (it just opens it in the same tab closing the currently active file).
I found this plugin and was [surprised that many people would love to see this as a native feature]([Click links/files to open in new tab by default - Feature requests - Obsidian Forum](https://forum.obsidian.md/t/click-links-files-to-open-in-new-tab-by-default/7347)) of Obsidian.

The author comments on this in the repository `README.md` with a cynical note:
> I'm not putting much effort into expanding on this plugin since it would essentially be a game of wackamole to hackily patch all potential use cases. If you'd like this functionality natively, I suggest submitting a feature request to Obsidian.


### obsidian-git
Link: [denolehov/obsidian-git: Backup your Obsidian.md vault with git (github.com)](https://github.com/denolehov/obsidian-git)

Basic support for git to backup my vault.
I have two vaults: one at work and one private. Currently I only backup my private one (for confidentiality reasons).
What is more to say other than it just works!
To be fair, my vaults are quite small still and I need to find a better way to handle images.


### Dataview
Link: [blacksmithgu/obsidian-dataview: A data index and query language over Markdown files, for https://obsidian.md/. (github.com)](https://github.com/blacksmithgu/obsidian-dataview)

I have seen so many people hyping this plugin that I found it in my list of installed plugins.
I am yet to make use of it properly.
I think I will leave it installed to someday finally find the time to make proper use of it.

## Resources
[PKM Zettelkasten](https://zk.zettel.page/)
