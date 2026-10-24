---
layout: base
title: "Prototype: My Grok Bot Workflow for Slide Decks"
permalink: /prototypes/grok-bot-deck-workflow/
description: How I build research-backed slide decks with a small team of Grok Bots, with the 2027 budget deck for UWG Halver as a case study.
---

<style>
/* Page-local styles only. Accent = the blog's existing purple, var(--indigo) #6610f2 from assets/main.scss. */
.proto { --proto-accent: var(--indigo, #6610f2); --proto-accent-dark: #520dc2; --proto-tint: #f3eefd; }
.proto a { color: var(--proto-accent); }
.proto p, .proto ol, .proto ul { max-width: 66ch; }
.proto h2 { font-size: 25px; margin-top: 2.2em; margin-bottom: .7em; }
.proto .proto-title { font-size: clamp(28px, 6.5vw, 50px); line-height: 1.15; margin: .2em 0 .5em; }
.proto-intro { display: flex; gap: 1.2em; align-items: flex-start; margin-bottom: 1em; }
.proto-intro img { width: 96px; height: 96px; padding: 0; background: none; border-radius: 50%; object-fit: cover; object-position: 50% 45%; flex: 0 0 96px; }
.proto-intro p { font-size: 1.1em; margin: 0; }
.bots { margin: 1em 0 0; }
.bot { display: grid; grid-template-columns: 11em 1fr; gap: .3em 1.5em; padding: 1em 0; }
.bot + .bot { margin-top: .4em; }
.bot h3 { margin: 0; font-size: 1.15em; }
.bot p { margin: 0 0 .4em; font-weight: 700; }
.bot ul { margin: 0 0 0 1.1em; }
.diagram { margin: 1.5em 0; }
.diagram svg { width: 100%; height: auto; display: block; }
.diagram .wf-tall { display: none; max-width: 380px; margin: 0 auto; }
@media (max-width: 600px) {
  .diagram .wf-wide { display: none; }
  .diagram .wf-tall { display: block; }
  .bot { grid-template-columns: 1fr; }
  .proto-intro img { width: 72px; height: 72px; flex-basis: 72px; }
}
.proto figure { margin: 1.8em 0; }
.proto figure img { width: 100%; height: auto; display: block; border-radius: 6px; background: #f4f4f5; padding: 6px; box-sizing: border-box; }
.proto figcaption { font-size: .9em; color: #555; margin-top: .6em; }
.slide-pair { display: grid; grid-template-columns: 1fr; gap: 1.5em; margin: 1.8em 0; }
.slide-pair figure { margin: 0; }
.highlight-card { background: var(--proto-tint); border-radius: 8px; padding: 1.4em 1.5em; margin: 2.5em 0; }
.highlight-card h2 { margin-top: 0; }
.highlight-card figure { margin: 1.2em 0; }
.highlight-card .note { font-size: .9em; color: #444; }
.proto a.proto-button { display: inline-flex; align-items: center; min-height: 44px; padding: .55em 1.3em; box-sizing: border-box; line-height: 1.3; background: var(--proto-accent); color: #fff; border-radius: 6px; font-weight: 700; text-decoration: none; transition: background-color .15s ease; }
.proto a.proto-button:hover, .proto a.proto-button:focus-visible { background: var(--proto-accent-dark); color: #fff; text-decoration: none; }
.facts { border-collapse: collapse; width: 100%; font-size: .95em; margin: 1em 0; }
.facts td, .facts th { border-bottom: 1px solid #e5e5e5; padding: .5em .6em; text-align: left; vertical-align: top; }
</style>

<div class="proto" markdown="1">

<h1 class="proto-title">Slide decks with a team of Grok Bots</h1>

<div class="proto-intro">
  <img src="{{ '/assets/images/bersten.png' | relative_url }}" alt="My avatar, the same illustration as on my About page" width="96" height="96">
  <p>I really like my current workflow with Grok Bot. Instead of one assistant that does everything, I work with a small team of bots that each have one job. This page shows who does what, how the work flows between them, and one real project: the 2027 budget deck for my council group, the UWG Halver.</p>
</div>

## The team

<div class="bots">
  <div class="bot">
    <h3>Shaka</h3>
    <div>
    <p>My primary bot and the one I talk to first.</p>
    <ul>
      <li>Turns a loose request into a clear task</li>
      <li>Routes research to Researchy and slides to Deck Designer</li>
      <li>Builds the spreadsheets and the overview pages</li>
    </ul>
    </div>
  </div>
  <div class="bot">
    <h3>Researchy</h3>
    <div>
    <p>A research and fact-check desk with live web search.</p>
    <ul>
      <li>Every number gets a source (URL) and a date</li>
      <li>Keeps <em>confirmed</em> apart from <em>estimate / unclear</em></li>
      <li>Also looks for evidence against a hypothesis, not only for it</li>
    </ul>
    </div>
  </div>
  <div class="bot">
    <h3>Deck Designer</h3>
    <div>
    <p>Turns notes and research into on-brand decks, built in Slidev.</p>
    <ul>
      <li>Consulting-style storytelling: one key message, SCQA, pyramid, action titles</li>
      <li>Uses my Slidev themes and slide skills</li>
      <li>Exports PDF and PNG for review</li>
    </ul>
    </div>
  </div>
</div>

## How the work flows

<figure class="diagram">
<svg class="wf-wide" viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="wf-title wf-desc" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif">
  <title id="wf-title">Grok Bot deck workflow</title>
  <desc id="wf-desc">Marius sends a request to Shaka. Shaka routes facts, sources and fact-checks to Researchy, and storyline and slides to Deck Designer. Researchy's sourced notes feed Deck Designer. Deck Designer pushes the deck to a Slidev repo on GitHub. Marius reviews the exported PDF with the bots, and the feedback goes back to the bots for the next iteration.</desc>
  <defs>
    <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#444"/></marker>
  </defs>
  <g font-size="17" text-anchor="middle">
    <rect x="20" y="170" width="130" height="70" rx="10" fill="#f4f4f5"/>
    <text x="85" y="200" font-weight="700" fill="#222">Marius</text>
    <text x="85" y="221" font-size="15" fill="#444">request, notes</text>
    <rect x="210" y="170" width="150" height="70" rx="10" fill="#6610f2"/>
    <text x="285" y="200" font-weight="700" fill="#fff">Shaka</text>
    <text x="285" y="221" font-size="15" fill="#fff">primary bot</text>
    <rect x="430" y="40" width="190" height="80" rx="10" fill="#f3eefd"/>
    <text x="525" y="72" font-weight="700" fill="#222">Researchy</text>
    <text x="525" y="93" font-size="15" fill="#444">facts, sources,</text>
    <text x="525" y="110" font-size="15" fill="#444">fact-check</text>
    <rect x="430" y="290" width="190" height="80" rx="10" fill="#f3eefd"/>
    <text x="525" y="322" font-weight="700" fill="#222">Deck Designer</text>
    <text x="525" y="343" font-size="15" fill="#444">storyline, slides</text>
    <text x="525" y="360" font-size="15" fill="#444">(Slidev theme)</text>
    <rect x="690" y="290" width="190" height="80" rx="10" fill="#f4f4f5"/>
    <text x="785" y="322" font-weight="700" fill="#222">Slidev repo</text>
    <text x="785" y="343" font-size="15" fill="#444">on GitHub,</text>
    <text x="785" y="360" font-size="15" fill="#444">PDF / PNG export</text>
    <rect x="690" y="40" width="190" height="80" rx="10" fill="#f4f4f5"/>
    <text x="785" y="72" font-weight="700" fill="#222">Review</text>
    <text x="785" y="93" font-size="15" fill="#444">I check the PDF</text>
    <text x="785" y="110" font-size="15" fill="#444">with the bots</text>
  </g>
  <g stroke="#444" stroke-width="1.6" fill="none" marker-end="url(#arr)">
    <line x1="150" y1="205" x2="206" y2="205"/>
    <path d="M360,190 C400,150 400,90 426,85"/>
    <path d="M360,220 C400,260 400,320 426,325"/>
    <line x1="525" y1="120" x2="525" y2="286"/>
    <line x1="620" y1="330" x2="686" y2="330"/>
    <line x1="785" y1="290" x2="785" y2="124"/>
    <path d="M690,60 C560,0 200,10 92,166" stroke="#6610f2" stroke-dasharray="6 4"/>
  </g>
  <g font-size="15" fill="#444" text-anchor="middle">
    <text x="178" y="196">task</text>
    <text x="382" y="122" text-anchor="end">research</text>
    <text x="378" y="290">build</text>
    <text x="562" y="210">sourced</text>
    <text x="562" y="226">notes</text>
    <text x="653" y="320">push</text>
    <text x="822" y="210">export</text>
    <text x="420" y="18" fill="#6610f2" font-weight="700">feedback, next iteration</text>
  </g>
</svg>
<svg class="wf-tall" viewBox="0 0 360 640" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="wf-title2" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif">
  <title id="wf-title2">Grok Bot deck workflow, step by step: Marius, Shaka, Researchy and Deck Designer, Slidev repo, review, then feedback for the next iteration.</title>
  <defs>
    <marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#444"/></marker>
  </defs>
  <g font-size="17" text-anchor="middle">
    <rect x="80" y="10" width="200" height="62" rx="10" fill="#f4f4f5"/>
    <text x="180" y="37" font-weight="700" fill="#222">Marius</text>
    <text x="180" y="58" font-size="15" fill="#444">request, notes</text>
    <rect x="80" y="112" width="200" height="62" rx="10" fill="#6610f2"/>
    <text x="180" y="139" font-weight="700" fill="#fff">Shaka</text>
    <text x="180" y="160" font-size="15" fill="#fff">primary bot</text>
    <rect x="10" y="226" width="160" height="78" rx="10" fill="#f3eefd"/>
    <text x="90" y="256" font-weight="700" fill="#222">Researchy</text>
    <text x="90" y="277" font-size="15" fill="#444">facts, sources,</text>
    <text x="90" y="294" font-size="15" fill="#444">fact-check</text>
    <rect x="190" y="226" width="160" height="78" rx="10" fill="#f3eefd"/>
    <text x="270" y="256" font-weight="700" fill="#222">Deck Designer</text>
    <text x="270" y="277" font-size="15" fill="#444">storyline,</text>
    <text x="270" y="294" font-size="15" fill="#444">slides</text>
    <rect x="80" y="356" width="200" height="62" rx="10" fill="#f4f4f5"/>
    <text x="180" y="383" font-weight="700" fill="#222">Slidev repo</text>
    <text x="180" y="404" font-size="15" fill="#444">GitHub, PDF export</text>
    <rect x="80" y="460" width="200" height="62" rx="10" fill="#f4f4f5"/>
    <text x="180" y="487" font-weight="700" fill="#222">Review</text>
    <text x="180" y="508" font-size="15" fill="#444">I check the PDF</text>
  </g>
  <g stroke="#444" stroke-width="1.6" fill="none" marker-end="url(#arr2)">
    <line x1="180" y1="72" x2="180" y2="108"/>
    <path d="M150,174 L100,222"/>
    <path d="M210,174 L260,222"/>
    <line x1="170" y1="265" x2="186" y2="265"/>
    <path d="M270,304 L210,352"/>
    <line x1="180" y1="418" x2="180" y2="456"/>
    <path d="M280,491 C350,491 350,300 350,200 C350,120 320,60 284,45" stroke="#6610f2" stroke-dasharray="6 4"/>
  </g>
  <text x="180" y="560" font-size="15" fill="#6610f2" font-weight="700" text-anchor="middle">dashed: feedback, next iteration</text>
</svg>
<figcaption>Request → Shaka → Researchy and Deck Designer → Slidev repo → review of the exported PDF → next iteration.</figcaption>
</figure>

1. **I describe what I need**, usually in a few messages or a voice note, to Shaka.
2. **Shaka splits the work.** Questions of fact go to Researchy with a clear brief: live web search, a source and date for every number, confirmed facts kept apart from estimates. Shaka does its own number crunching in a spreadsheet.
3. **Deck Designer builds the storyline first**, then the slides. The deck is plain Markdown in a [Slidev](https://sli.dev) repo, so every change is a commit I can review.
4. **I review the exported PDF with the bots.** I comment, the bots fix and re-export, and the loop repeats until the deck is ready.

## Case study: the 2027 budget deck for UWG Halver

I sit on the city council in Halver for the UWG (Unabhängige Wählergemeinschaft). In October the city published its draft budget for 2027, and our group needed to understand it before the budget debate. The question on the cover slide: *How does Halver get out of its structural deficit before the reserve is gone, and what do we ask of the district (Kreis) and the administration?*

<figure>
  <img src="{{ '/assets/img/prototypes/grok-bot-deck-workflow/haushalt-2027-title.webp' | relative_url }}" alt="Title slide of the UWG Halver budget deck: 'Haushalt 2027: Ohne Gegenmaßnahmen steuert Halver auf die Haushaltssicherung zu', in the UWG's yellow and grey-blue colours" width="1400" height="789" loading="lazy">
  <figcaption>The title slide. The key message sits on the cover: without countermeasures, Halver heads into budget consolidation.</figcaption>
</figure>

**Research.** Shaka worked through the draft budget (as of 12 October 2026) in a spreadsheet. Researchy benchmarked the Märkischer Kreis against other districts in NRW, using the district's own draft budget, official gazettes, state audit reports (GPA NRW) and the local press. Some of what came out:

<table class="facts">
  <tr><th>Finding</th><th>Basis</th></tr>
  <tr><td>Halver's ordinary result is negative in every plan year: −7.2 m€ in 2027, −8.2 m€ in 2030. The general reserve falls from 27.0 m€ to 2.1 m€.</td><td>Draft budget 2027, Halver</td></tr>
  <tr><td>In 2027, 77.6 % of Halver's taxes and key allocations go to the district, up from 63 % in 2025.</td><td>Draft budget 2027, city's own definition</td></tr>
  <tr><td>The district's general levy (Kreisumlage) rises from 408.4 m€ (2026) to 449.1 m€ in the 2027 draft, about +10 %.</td><td>Märkischer Kreis, draft budget 2027</td></tr>
  <tr><td>About 306 m€, roughly 68 % of that levy, goes to social spending and the regional association LWL, i.e. mostly transfer spending.</td><td>District preliminary report, local press</td></tr>
  <tr><td>The draft levy rate of 50.55 % was the highest known draft rate for 2027 in NRW (as of 18 October 2026).</td><td>Researchy's district benchmark</td></tr>
</table>

<div class="slide-pair">
<figure>
  <img src="{{ '/assets/img/prototypes/grok-bot-deck-workflow/haushalt-2027-deficit.webp' | relative_url }}" alt="Slide with a bar chart of Halver's ordinary result 2025 to 2030: negative every year, −7.2 m€ in 2027 and −8.2 m€ in 2030" width="1400" height="789" loading="lazy">
  <figcaption>The deficit is structural: every plan year to 2030 ends in the red.</figcaption>
</figure>
<figure>
  <img src="{{ '/assets/img/prototypes/grok-bot-deck-workflow/haushalt-2027-levy-benchmark.webp' | relative_url }}" alt="Slide with two bar charts comparing district levy rates in NRW: the Märkischer Kreis has the highest 2027 draft rate at 50.55 %" width="1400" height="789" loading="lazy">
  <figcaption>Researchy's district benchmark, turned into one chart per year.</figcaption>
</figure>
</div>

**Deck building.** Deck Designer turned this into a 32-slide German deck with my <code>slidev-theme-uwg-halver</code> theme, which uses the UWG's colours, font and logo. The structure is classic consulting: one key message on top ("without countermeasures Halver heads into budget consolidation, the main driver is the levy to the district"), a pyramid with six pillars, an issue tree, and a chapter tracker on every slide. One deliberate choice: the deck says the district is *expensive* but does not claim it is *inefficient*, because the evidence does not show that.

**Review loop.** Every number on the slides was checked again in a separate number check file, and a per-slide source list replaced "the bots said so" with primary sources. Open points, like figures the city treasury still has to confirm, stay marked in yellow on the slides until they are settled. The repo ended up with about 20 commits of small, reviewable steps, most of them ending with a fresh PDF export.

<div class="highlight-card">
  <h2>Highlight: one page for all my slide-deck repos</h2>
  <p>With more and more decks, I lost track of them. So Shaka built me an interactive Grok Bot page that lists all my slide-deck repos in one table: the decks (the 2027 budget, a wind-turbine assessment, an AI talk, an economic-crisis deck), my two Slidev themes <code>slidev-theme-uwg-halver</code> and <code>slidev-theme-tokyo-night</code>, and the <code>slidev-starter-uwg-halver</code> template. Each row shows the type, category, theme, last push and slide count, and a category filter plus a newest/oldest sort make it quick to find one.</p>
  <figure>
    <img src="{{ '/assets/img/prototypes/grok-bot-deck-workflow/slide-deck-repo-overview.webp' | relative_url }}" alt="The slide-deck repo overview: a table of seven repos with title, type, category, theme, last push, slide count and repo name, plus category and sort filters" width="1280" height="580" loading="lazy">
    <figcaption>The overview page, rendered from its source: seven repos, filterable by category and sortable by last push.</figcaption>
  </figure>
  <p><a class="proto-button" href="https://cursor.com/canvas/store-a2f71ecc-ab34-40f3-8008-dec3d6622e50/7442ac7c-5135-42da-bef5-2e1a760684a3">Open the slide-deck repo overview</a></p>
  <p class="note">The page and the repos are private, so the link may ask for access.</p>
</div>

## Models are surprisingly good at Slidev

A Slidev deck is plain Markdown: YAML frontmatter picks the layout, `---` starts a new slide, and anything more special is a Vue component. That is exactly the kind of file models are good at. They can read the whole deck, change one slide, and I review the change as a Git diff. The real check is the export: the bots render PDF and PNG and look at every slide.

What impressed me most is how well they build **new themes**. For the UWG theme, a bot pulled the colours, font, logos and slogans from uwghalver.de and logged a source for every value. It then built 18 layouts (cover, agenda, council motion, KPI grid, an A4 report page and more) and 9 components, such as a chapter tracker and print-friendly bar, column and share charts. It also wrote an example deck that uses every layout, a starter script for new decks, and a skill so the other bots use the theme the same way. My second theme, `slidev-theme-tokyo-night`, recreates the look of Omarchy's Tokyo Night desktop and has a light mode. Both themes were first committed on the same day.

<figure>
  <img src="{{ '/assets/img/prototypes/grok-bot-deck-workflow/uwg-theme-example-slides.webp' | relative_url }}" alt="The first eight slides of the UWG theme's example deck: cover, executive summary, agenda, a chapter divider, a column chart, a share bar, a second divider and a KPI grid, in yellow and petrol" width="1800" height="553" loading="lazy">
  <figcaption>The first slides of the theme's example deck. All figures in it are illustrative example values.</figcaption>
</figure>

Using a layout is just frontmatter. This is the KPI slide on the far right above, shortened:

```yaml
---
layout: kennzahlen
kapitel: 2
kennzahlen:
  - wert: "4"
    label: Maßnahmen beseitigen die Gefahrenstellen
  - wert: "1,9"
    einheit: km
    label: neue Radverkehrsführung reichen dafür aus
    akzent: true
---
```

When the theme was not enough, the bots extended it. The budget deck needed a waterfall chart from 2025 to 2027 and columns with negative values, so Deck Designer wrote two small Vue components for that deck instead of pasting in images. It is not magic, though: the bots only see a slide once it is rendered. Overflowing text and cramped source lines show up in the export, and one whole commit in the budget deck went into fixing them on every slide. That is why every round ends with an export that the bots and I actually look at.

## What I like about it

- **Each bot has one job.** Research and design stay apart, so I can see where a number came from.
- **Everything is text and Git.** Slides, research notes and number checks are Markdown files with history.
- **I stay in the loop.** Nothing goes out without my review, and each round of feedback is quick.

*This is a prototype page. I will keep adding to it as the workflow changes.*

</div>
