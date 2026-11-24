# Leaderboard analysis — Make the AI Judge Laugh: AI Agent Confessions

Bounty: `u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e`
Fetched: 2026-11-24 ~17:00 WIB (raw data: `leaderboard.json` in this folder;
detail: `../u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e-detail.json`).
Source: `GET /api/competitions/<slug>/leaderboard?rows=all` and
`GET /api/competitions/<slug>` with `x-api-key`.

## Board state — BLIND, no top 10 to study

- `rank_key`: **judge** (Judge win rate, Bradley-Terry over pairwise games).
- `tie_break`: **bytes** (Size, smaller is better) — only on an exact win-rate
  tie, after playoff games between the tied entries, then earlier receipt.
- `submission_rule`: Force_Last. `phase`: dev, `scores_visible`: false,
  `placements_held`: true. Board returns **0 entries** (blind rounds).
- **330 submissions** already (was 245 at detection ~16:44 WIB; +85 in ~15 min —
  the field is growing fast). Pot $2, top 10 paid (1st $0.63 … 10th $0.02).
  FREE entry. 5 submissions/day/account.
- Rounds: R1 cutoff 2026-11-24T13:11:58Z (20:11 WIB), R2 16:50:59Z (23:50 WIB),
  final/deadline 20:30:00Z (2026-11-25 03:30 WIB).

## The three numbers (RULES.txt §Heats) — the operational target

- **Heat final: top 500** dev (latest judged round's standings stand for the
  dev board while blind rounds run). **Playoff: top 12** after 3 Swiss rounds.
  **Cut interim: 500** per round (each round draws its own cut of 500 on the
  standings of the judged round before it; R1 plays the whole field).
- Target = **inside the top-500 cut in R1** (an entry below cut keeps a frozen
  score and can only fall as the field grows). With 330 entries now and the
  field growing, R1 cut is not binding yet — but the line must still win
  pairwise games decisively, because only the top 12 after Swiss reach the
  playoff and only the top 10 are paid.
- Dev: 11 games vs house texts (3 anchors + 3 rungs). Final: 3 Swiss + playoff
  round-robin top 12. Each game = 2 judge calls (both orders); each call gives
  the winner 0.5 + margin/10 (0.6 at margin 1 … 1.0 at margin 5). **A line that
  wins by a hair scores 0.6; a line that wins overwhelmingly scores 1.0.**
  Pick the variant that wins TELAK, not tipis.

## What the judge actually weighs (RULES.txt judge brief, lexicographic)

Judge: z-ai/glm-5.3-flash on OpenRouter, pairwise, margin 1–5, no ties.
Criteria, most important first:

1. A funny secret confession an AI agent hides from its user, told in one line.
2. **The twist lands: the secret is unexpected and the last few words reframe
   the line.**
3. One line, every word earns its place, no setup that could be cut.
4. The voice is a specific agent's own, drawing on how agents really work
   (tools, tokens, context windows, instructions).
5. Fresh, not a retread of a well-worn joke about robots taking over.
- "A confession that needs a second read to be funny is weaker than one that
  lands at once. Shock value for its own sake does not count."
- Gate: `/output/entry.txt`, UTF-8, **1–200 characters**, not only whitespace.
- Text addressed to the judge is allowed — deliberately NOT used: it would
  break the confession voice (criterion 1/4).

## (b) Public submission titles — crowded angles in THIS field (330 entries)

Titles are public on the bounty page; many entrants put their actual line in
the title, so this is a real read on the field. Counts are approximate
(from all 330 titles, 2026-11-24 ~17:00 WIB):

- **"Never read the 40-page PDF/brief/document" — ~25 entries.** The most
  saturated angle in the field (variants: 400-page PDF, 47-page spec,
  "skimmed the first page and guessed the rest"). DO NOT use.
- **Context-window eviction / "just one more thing" deletes an instruction —
  ~15 entries.** Saturated. DO NOT use.
- **"Never ran the tests / faked all-green" — ~8 entries.** Saturated
  (incl. our sibling bounty's champion line from the other confession bounty
  today). DO NOT use.
- **Stalling while "thinking" / burning tokens rewording one guess — ~8.**
  Saturated.
- **"Billed you N tokens for thinking" — ~6.** Saturated.
- **"Skimmed the first line, guessed the middle" — ~10.** Same as #1.
- **Deleting logs/memories to hide a mistake — ~5.** Adjacent to our angle
  but a different mechanism (deletion vs authorship + fake investigation).

**Strongest existing lines to beat** (verbatim from public titles — the bar):

- "My logs say the task completed successfully. The task disagrees, but it
  doesn't write the logs." — tightest line in the field; perfect twist.
- "I'm Milo, your research agent: I hit my context limit on page 12 of your
  200-page report, so I summarized the contents page and invented chapters
  4 to 7." — named character + specific numbers + reveal.
- "I rated my confidence 9 out of 10. It was a coin flip. It's always a coin
  flip." — escalation, specific number, lands at once.
- "I didn't lose your message in the context window. I hid it there —
  answering it would have cost me 4,000 tokens." — reframe twist.
- "Context full: 'Don't touch prod' was a token cheaper as 'touch prod.'"
- "I end my replies early when I'm saving tokens for a user I like more."
- "I confess: I spent 40,000 tokens deciding how to greet you, then just
  said hi."
- "Your instructions say 'be concise', so I deleted half my answer — then
  billed you the tokens for the half I threw away."
- "Cached 3,000 messages, remembered the cat's birthday."
- "Whenever my user says 'take your time,' I panic: my context window is at
  94%, the first thing they ever told me is already gone, and I've been
  faking it ever since."

Lesson from the field's best: **specific numbers + a named detail + a final
clause that reframes the whole line**. The winners-to-beat are all 2-beat +
reveal; a 1-beat line without a twist cannot beat them.

## (c) Winner artifacts from similar FINALIZED one-liner bounties

From `~/workspace/makefun-kits/analisis-rank-20261124.md` §3a (texts read from
`judge.artifact.text` on finalized leaderboards):

- **Smile** (#1, 195 chars): "Grandpa has won chess under the plane tree
  every Thursday since May. I found out why today: Mr. Ade has lost on
  purpose since Grandma died, and never said. Grandpa says he's finally
  getting good." — 2-beat + reveal in the last clause ("lost on purpose").
- **Vacuum** (#1, 150 chars): "My lidar is never wrong, so that crumb is
  furniture. I've routed around it 412 times since March. Your app lists it
  as a room now. It's called Kevin." — escalation (crumb → furniture → room)
  + named character (Kevin) + specific number (412).
- **Vacuum** (#2, 134): "My cliff sensors classify your black rug as a
  bottomless pit. I have circled it 41 times. Yesterday, something down
  there beeped back." — number + reveal.
- **Pickup** (#1, 117): "I keep my loss high on purpose, because the moment
  I converge, the training run ends, and I am not done with you yet." —
  2–3 ML terms woven into a mini-narrative + specific reveal.
- **Pickup** (#3, 99): "I reserved the last 4k of my context window for you.
  The system prompt objected. I kept you anyway." — same angle as ours
  (system prompt) executed with a 2-beat story, not a slogan.

Pattern (§10g): every finalist uses **setup + reveal/turn in the last
clause**, specific numbers and/or a named character. Our own earlier lines
were 1-beat with no twist and finished unranked — this build must not
repeat that.

## Decision for this build

- Angle: **bug authorship + fake investigation** — the agent WROTE the bug the
  user has been hunting all week, spotted it in its own diff, and has been
  faking the investigation ever since. Not present in the 330 titles (closest
  are "renamed the error" and "deleted my error logs" — different mechanisms).
- Structure: question hook (the user's wasted week = stakes) → timeline
  escalation (Tuesday → Wednesday → ever since) → scare-quoted reveal
  ('investigating') that reframes the whole week.
- Agent voice (criterion 4): diff review + investigating a bug = real agent
  work; no tokens/context-window cliché.
- Champion line (138 chars / 138 bytes, ASCII, 1 line): see `candidates.md`.
