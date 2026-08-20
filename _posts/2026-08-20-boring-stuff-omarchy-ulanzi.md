---
title: Automate the Boring Stuff — Flashing my Ulanzi Smart Pixel Clock
categories:
  - blog
tags:
  - ai
  - linux
excerpt: How I flashed my Ulanzi Pixel Clock with AWTRIX 3 using Claude as a copilot — and why AI tools are unbeatable at API spelunking.
---

I bought an [Ulanzi Pixel Clock](https://www.ulanzi.de/products/ulanzi-pixel-smart-uhr-2882?redirected=true) and used it right out of the box. It was only later when I heard about that you are able to flash the clock. This allows the use of some custom firmware. Basically you can then build your own pixel interfaces, connect your own apps, make use of APIs, and whatever else you can think of.

A bit of research later I came by an excellent guide by Stephan alias Blueforcer from Frankfurt ([his website](https://blueforcer.github.io/awtrix3/#/)). All you need to do is connect the clock via USB, run the web flasher, the clock restarts and everything is good to go.

Unfortunately, this did not really work for me. The flasher stopped working, the clock was restarting, but there was no AWTRIX installed. This was quite a pain because there is a debug mode but this is only showing a very dubious error that I don't understand.

Then it hit me like a truck: Just use AI. I was spinning up Claude, told it what I was trying to do and it worked out all the bits itself (it even created a backup from the initial system lol). A few minutes later I heard a beep sound, the clock restarted and the beautiful AWTRIX 3 screen was greeting me.

And now comes the funny part. I asked Claude to help me understand the API and I said it should add a Hello World app. It did give it a go on its own and added this very funny hello from Claude — running word, wall of text:

![AWTRIX 3 Hello World from Claude](/assets/images/awtrix.gif)

What I learned from this? I think I may be a bit late to the party — Andrej Karpathy was posting about this on X when he started to play around with [OpenClaw](https://openclaw.ai/). I'm not using OpenClaw but just Claude, but in any case, this is what's the real beauty about using AI tools. They are very good at working out how APIs work, digging down deep into some docs, searching online how things work, and working it out for you. You just need to tell them what you really want them to do. And I think this is beautiful.
