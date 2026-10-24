---
layout: base
title: "Prototype: My Grok Bot Workflow for Slide Decks"
permalink: /prototypes/grok-bot-deck-workflow/
description: How I build research-backed slide decks with a small team of Grok Bots, with the 2027 budget deck for UWG Halver as a case study.
---

<style>
.proto h2 { font-size: 25px; margin-top: 30px; margin-bottom: 20px; }
.proto-lead { font-size: 1.05em; color: #555; }
.proto-tag { display: inline-block; font-family: monospace; font-size: 85%; padding: 0 .5em; color: var(--indigo); background-color: #f2f2f2; border-radius: 5px; }
.bot-grid { display: flex; flex-wrap: wrap; gap: 1em; margin: 1.5em 0; }
.bot-card { flex: 1 1 220px; border: 1px solid #e5e5e5; border-top: 4px solid var(--indigo); border-radius: 6px; padding: .8em 1em; }
.bot-card h3 { margin: 0 0 .3em; font-size: 1.1em; }
.bot-card p { margin: 0 0 .5em; font-size: .95em; }
.bot-card ul { margin: 0; font-size: .9em; }
.bot-card.is-research { border-top-color: var(--teal); }
.bot-card.is-deck { border-top-color: var(--orange); }
.diagram { margin: 1.5em 0; overflow-x: auto; }
.diagram svg { width: 100%; min-width: 640px; height: auto; display: block; }
.diagram figcaption { font-size: .85em; color: #8c8c8c; text-align: center; margin-top: .5em; }
.highlight-card { background: var(--c-light-callout); border-left: .35em solid var(--indigo); border-radius: 6px; padding: 1em 1.2em; margin: 2em 0; }
.highlight-card h3 { margin-top: 0; }
.highlight-card .note { font-size: .85em; color: #666; }
.facts { border-collapse: collapse; width: 100%; font-size: .95em; margin: 1em 0; }
.facts td, .facts th { border-bottom: 1px solid #e5e5e5; padding: .4em .6em; text-align: left; vertical-align: top; }
</style>

<div class="proto" markdown="1">

# My Grok Bot Workflow for Slide Decks

<span class="proto-tag">prototype</span> <span class="proto-tag">ai</span> <span class="proto-tag">slidev</span>

<p class="proto-lead">I really like my current workflow with Grok Bot. Instead of one assistant that does everything, I work with a small team of bots that each have one job. This page shows who does what, how the work flows between them, and one real project: the 2027 budget deck for my council group, the UWG Halver.</p>

## The team

<div class="bot-grid">
  <div class="bot-card">
    <h3>Shaka</h3>
    <p>My primary bot and the one I talk to first.</p>
    <ul>
      <li>Turns a loose request into a clear task</li>
      <li>Routes research to Researchy and slides to Deck Designer</li>
      <li>Builds the spreadsheets and the overview pages</li>
    </ul>
  </div>
  <div class="bot-card is-research">
    <h3>Researchy</h3>
    <p>A research and fact-check desk with live web search.</p>
    <ul>
      <li>Every number gets a source (URL) and a date</li>
      <li>Keeps <em>confirmed</em> apart from <em>estimate / unclear</em></li>
      <li>Also looks for evidence against a hypothesis, not only for it</li>
    </ul>
  </div>
  <div class="bot-card is-deck">
    <h3>Deck Designer</h3>
    <p>Turns notes and research into on-brand decks, in Slidev and Google Workspace.</p>
    <ul>
      <li>Consulting-style storytelling: one key message, SCQA, pyramid, action titles</li>
      <li>Uses my Slidev themes and slide skills</li>
      <li>Exports PDF and PNG for review</li>
    </ul>
  </div>
</div>

## How the work flows

<figure class="diagram">
<svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="wf-title wf-desc" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif">
  <title id="wf-title">Grok Bot deck workflow</title>
  <desc id="wf-desc">Marius sends a request to Shaka. Shaka routes facts, sources and fact-checks to Researchy, and storyline and slides to Deck Designer. Researchy's sourced notes feed Deck Designer. Deck Designer pushes the deck to a Slidev repo on GitHub. The exported deck is reviewed in a group chat, and feedback goes back to the bots for the next iteration.</desc>
  <defs>
    <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#555"/></marker>
  </defs>
  <g font-size="16" text-anchor="middle">
    <rect x="20" y="170" width="130" height="70" rx="10" fill="#f8f9fa" stroke="#343a40" stroke-width="1.5"/>
    <text x="85" y="200" font-weight="700" fill="#333">Marius</text>
    <text x="85" y="220" font-size="14" fill="#6c757d">request, notes</text>
    <rect x="210" y="170" width="150" height="70" rx="10" fill="#efe7fd" stroke="#6610f2" stroke-width="1.5"/>
    <text x="285" y="200" font-weight="700" fill="#333">Shaka</text>
    <text x="285" y="220" font-size="14" fill="#6c757d">primary bot, routing</text>
    <rect x="430" y="40" width="190" height="80" rx="10" fill="#e3f9f2" stroke="#20c997" stroke-width="1.5"/>
    <text x="525" y="72" font-weight="700" fill="#333">Researchy</text>
    <text x="525" y="92" font-size="14" fill="#6c757d">facts, sources,</text>
    <text x="525" y="107" font-size="14" fill="#6c757d">fact-check</text>
    <rect x="430" y="290" width="190" height="80" rx="10" fill="#fff1e6" stroke="#fd7e14" stroke-width="1.5"/>
    <text x="525" y="322" font-weight="700" fill="#333">Deck Designer</text>
    <text x="525" y="342" font-size="14" fill="#6c757d">storyline, slides</text>
    <text x="525" y="357" font-size="14" fill="#6c757d">(Slidev theme)</text>
    <rect x="690" y="290" width="190" height="80" rx="10" fill="#f8f9fa" stroke="#343a40" stroke-width="1.5"/>
    <text x="785" y="322" font-weight="700" fill="#333">Slidev repo</text>
    <text x="785" y="342" font-size="14" fill="#6c757d">on GitHub,</text>
    <text x="785" y="357" font-size="14" fill="#6c757d">PDF / PNG export</text>
    <rect x="690" y="40" width="190" height="80" rx="10" fill="#e6f2ff" stroke="#007bff" stroke-width="1.5"/>
    <text x="785" y="72" font-weight="700" fill="#333">Group chat</text>
    <text x="785" y="92" font-size="14" fill="#6c757d">review with me</text>
    <text x="785" y="107" font-size="14" fill="#6c757d">and the bots</text>
  </g>
  <g stroke="#555" stroke-width="1.6" fill="none" marker-end="url(#arr)">
    <line x1="150" y1="205" x2="206" y2="205"/>
    <path d="M360,190 C400,150 400,90 426,85"/>
    <path d="M360,220 C400,260 400,320 426,325"/>
    <line x1="525" y1="120" x2="525" y2="286"/>
    <line x1="620" y1="330" x2="686" y2="330"/>
    <line x1="785" y1="290" x2="785" y2="124"/>
    <path d="M690,60 C560,0 200,10 92,166" stroke-dasharray="6 4"/>
  </g>
  <g font-size="14" fill="#555" text-anchor="middle">
    <text x="178" y="196">task</text>
    <text x="378" y="128">research</text>
    <text x="378" y="290">build</text>
    <text x="560" y="210">sourced</text>
    <text x="560" y="225">notes</text>
    <text x="653" y="320">push</text>
    <text x="820" y="210">review</text>
    <text x="420" y="18">feedback, next iteration</text>
  </g>
</svg>
<figcaption>Request → Shaka → Researchy and Deck Designer → Slidev repo → review in a group chat → next iteration.</figcaption>
</figure>

1. **I describe what I need**, usually in a few messages or a voice note, to Shaka.
2. **Shaka splits the work.** Questions of fact go to Researchy with a clear brief: live web search, a source and date for every number, confirmed facts kept apart from estimates. Shaka does its own number crunching in a spreadsheet.
3. **Deck Designer builds the storyline first**, then the slides. The deck is plain Markdown in a [Slidev](https://sli.dev) repo, so every change is a commit I can review.
4. **Review happens in a group chat** with me and the bots. I comment on the exported PDF, the bots fix and re-export, and the loop repeats until the deck is ready.

## Case study: the 2027 budget deck for UWG Halver

I sit on the city council in Halver for the UWG (Unabhängige Wählergemeinschaft). In October the city published its draft budget for 2027, and our group needed to understand it before the budget debate. The question on the cover slide: *How does Halver get out of its structural deficit before the reserve is gone, and what do we ask of the district (Kreis) and the administration?*

**Research.** Shaka worked through the draft budget (as of 12 October 2026) in a spreadsheet. Researchy benchmarked the Märkischer Kreis against other districts in NRW, using the district's own draft budget, official gazettes, state audit reports (GPA NRW) and the local press. Some of what came out:

<table class="facts">
  <tr><th>Finding</th><th>Basis</th></tr>
  <tr><td>Halver's ordinary result is negative in every plan year: −7.2 m€ in 2027, −8.2 m€ in 2030. The general reserve falls from 27.0 m€ to 2.1 m€.</td><td>Draft budget 2027, Halver</td></tr>
  <tr><td>In 2027, 77.6 % of Halver's taxes and key allocations go to the district, up from 63 % in 2025.</td><td>Draft budget 2027, city's own definition</td></tr>
  <tr><td>The district's general levy (Kreisumlage) rises from 408.4 m€ (2026) to 449.1 m€ in the 2027 draft, about +10 %.</td><td>Märkischer Kreis, draft budget 2027</td></tr>
  <tr><td>About 306 m€, roughly 68 % of that levy, goes to social spending and the regional association LWL, i.e. mostly transfer spending.</td><td>District preliminary report, local press</td></tr>
  <tr><td>The draft levy rate of 50.55 % was the highest known draft rate for 2027 in NRW (as of 18 October 2026).</td><td>Researchy's district benchmark</td></tr>
</table>

**Deck building.** Deck Designer turned this into a 32-slide German deck with my <code>slidev-theme-uwg-halver</code> theme, which uses the UWG's colours, font and logo. The structure is classic consulting: one key message on top ("without countermeasures Halver heads into budget consolidation, the main driver is the levy to the district"), a pyramid with six pillars, an issue tree, and a chapter tracker on every slide. One deliberate choice: the deck says the district is *expensive* but does not claim it is *inefficient*, because the evidence does not show that.

**Review loop.** Every number on the slides was checked again in a separate number check file, and a per-slide source list replaced "the bots said so" with primary sources. Open points, like figures the city treasury still has to confirm, stay marked in yellow on the slides until they are settled. The repo ended up with about 20 commits of small, reviewable steps, most of them ending with a fresh PDF export.

<div class="highlight-card">
  <h3>Highlight: one page for all my slide-deck repos</h3>
  <p>With more and more decks, I lost track of them. So Shaka built me an interactive Grok Bot page that lists all my slide-deck repos in one table: the decks (the 2027 budget, a wind-turbine assessment, an AI talk, an economic-crisis deck), my two Slidev themes <code>slidev-theme-uwg-halver</code> and <code>slidev-theme-tokyo-night</code>, and the <code>slidev-starter-uwg-halver</code> template. Each row shows the type, category, theme, last push and slide count, and a category filter plus a newest/oldest sort make it quick to find one.</p>
  <p><a href="https://cursor.com/canvas/store-a2f71ecc-ab34-40f3-8008-dec3d6622e50/7442ac7c-5135-42da-bef5-2e1a760684a3">Open the slide-deck repo overview →</a></p>
  <p class="note">The page and the repos are private, so the link may ask for access.</p>
</div>

## What I like about it

- **Each bot has one job.** Research and design stay apart, so I can see where a number came from.
- **Everything is text and Git.** Slides, research notes and number checks are Markdown files with history.
- **I stay in the loop.** Nothing goes out without my review, and the group chat makes feedback quick.

*This is a prototype page. I will keep adding to it as the workflow changes.*

</div>
