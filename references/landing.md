# Landing pages: the argument, the evidence, the launch checks

Read when the page exists to get one action from a visitor. This file supplies questions
and checks. It is not a visual system and not a section sequence: what the page looks like
comes from SKILL.md and the other menus, and what its sections are comes from the answers
below.

The strategy and launch-readiness material adapts Elaya's `landing-page-design` skill,
which credits Leonxlnx's taste-skill (both MIT, see NOTICE).

## 1. Is this a conversion page?

A conversion landing page has one offer, one audience and one primary action. A homepage,
a docs site or a working app screen may serve several intents. Do not force this model
onto them.

## 2. Questions before designing

Read the brief and the project first. Ask the user only for facts you cannot find and
that change the work; infer ordinary design choices and state your assumptions.

| Question | Why it matters |
| --- | --- |
| What is the offer, exactly? | the headline says this, in the visitor's words |
| What counts as conversion? | that is the one primary action, named the same everywhere |
| Where does the traffic come from? | the first screen must match the ad, email or search that sent them |
| What does the visitor already know? | decides how much explaining the page does |
| What would stop them? | each real objection gets an answer, in context |
| What proof actually exists? | screenshots, demos, quotes, approved logos, prices, real terms |

- State benefits as concrete outcomes supported by evidence the user supplied. Do not
  invent a time saving or a metric to sharpen a headline (floor item 5).
- Put each proof beside the claim it supports.
- If proof is absent, show the real product or describe what it does. No manufactured
  testimonial, logo wall, customer name or precise-looking number.
- Fictional demo data is used only when asked for, and is labelled. It is never customer
  proof.
- Describe a trial, refund, cancellation rule or guarantee only when the product really
  offers it.

## 3. Choose the argument, then the sections

| Visitor context | A page shape that fits | Evidence to lead with |
| --- | --- | --- |
| The product is understood from seeing it | a first screen plus a few explanatory sections | a real screenshot or working demo beside the promise |
| An unfamiliar category, or real scepticism | a longer explanation driven by the actual objections | the mechanism, the limits, the evidence, answers in context |
| A known audience and a narrow offer | a short page | the exact offer, the terms, the action |
| Visitors comparing alternatives | a comparison page | verifiable differences on criteria that matter to them |

These are choices. Include benefits, a process, proof, a comparison or an FAQ only when
it answers a question a visitor has. No page needs three steps, a set number of FAQ
entries or a fixed section list. For a high-friction offer, answer the decisive objection
before asking for commitment. Build each section from `layout.md`.

## 4. The first screen

Everything in it answers one of these, or goes:

- What is this?
- Why should I care?
- What does it look like, or what does it do?
- What do I do next?
- Why should I believe it? (only with real proof)

The headline is the offer in the visitor's words: specific enough that a competitor could
not use it unchanged. Give it a shape of its own; two clipped fragments in a row
("Build. Ship.") is the form every model reaches for.

## 5. The primary action

- The label says what happens when it is pressed: "Start a free trial", "Book a table",
  "Download for macOS". The same action keeps the same name and destination down the page.
- It is the most prominent control on the page, 44 px tall or more, with all its states
  (`motion.md`).
- A second action beside it is worth having only when it is a real alternative path
  ("See pricing"). "Learn more" beside every primary button is filler.
- Put the action near the claim that earns it. Repeat it where a convinced visitor would
  otherwise have to scroll back.
- On phones, keep the action reachable: early in the page, and again at the end, or in a
  bar that stays in view on a long page.

## 6. Small screens

- The headline drops in size and keeps its weight; the supporting line stays short.
- The visual proof stays, simplified, not removed.
- Multi-column sections stack in reading order (`layout.md`).
- Budget the first screen: one sized image, subsetted fonts, nothing that blocks render.

## 7. Launch checks

Before handing off a landing page:

- **Destinations and states.** Follow the primary action and every nav link. Forms
  validate input and report loading, error and confirmed success truthfully. No success
  message when nothing was sent. Say plainly which backend wiring does not exist yet.
- **Findability.** Make an explicit index or noindex choice from the intended traffic and
  the project's robots policy. Set an accurate title, description, canonical URL where it
  applies, and social-sharing metadata, and check that the sharing image and favicon files
  exist. Add structured data only after checking current eligibility.
- **Recovery and access.** The 404 and back paths work. The page is usable by keyboard,
  has a skip link where a nav precedes the content, has image alternatives, and reads well
  on a phone.
- **Policy.** Link the user's real privacy and terms pages, and match consent behaviour to
  what the site actually collects. No invented legal text, dead legal links or decorative
  consent banner.
- **Performance.** The first-screen image is sized and prioritised, fonts are limited to
  what is used, and nothing shifts as it loads.
- **Lint and screenshots,** as for every page (SKILL.md, "Checking the work").

Optional wider audit: the Front-End Checklist service (frontendchecklist.io) publishes
rules for accessibility, SEO, performance and security, with a remote endpoint that can
review pasted code. It sends that code to a third party, so use it only when the project
allows that, and treat it as a verifier, not a design guide.

## 8. Calibration

Habits that make a landing page read as generated. Each is a default to notice, and the
brief can ask for any of them:

- **The generic SaaS page:** a purple gradient, "Transform your workflow", a stock photo
  of a meeting, centred text, a rounded card with a shadow.
- **Card sickness:** every section in a rounded, shadowed box, so a landing page looks
  like a dashboard.
- **The pill cluster:** three to five badges by the headline that do nothing.
- **The stat strip:** a row of metrics on every page whatever the subject, often invented.
- **Eyebrow spam:** a small muted label above every heading. If a headline needs a preface
  to make sense, rewrite the headline.
- **The kitchen sink:** features, pricing, testimonials, FAQ and a form all in the first
  screen.
- **The orphaned action:** a button with no claim near it.
- **The invisible first screen:** a white ground, grey text, nothing to look at or
  remember.
- **The auto-advancing carousel:** it splits attention between several messages.
- **The wall of logos:** thirty marks in a grid. A few the user really has, set with
  care, say more.
- **Style-name leakage:** the design's style turning up in the copy ("a brutal,
  uncompromising platform").
- **Hover inflation:** elements that swell, grow borders or shift the layout on hover.
- **Dead controls:** things that look clickable and do nothing.
- **Bad crops:** a subject cut off, or empty space where the picture's weight should be.
- **Three nav items,** whatever the site needs.
- **The same page again:** the layout of your last landing page in new colours.
