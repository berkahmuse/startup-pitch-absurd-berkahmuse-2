# Funerals for Dead Tamagotchis — Startup Pitch

[![make.fun](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/c/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/berkahmuse/startup-pitch-absurd-berkahmuse-2/rank.svg)](https://make.fun/c/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/berkahmuse/startup-pitch-absurd-berkahmuse-2/reward.svg)](https://make.fun/c/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

Entry for the [make.fun bounty "Ridiculous at First Glance, Real by the Second"](https://make.fun/c/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a): one sentence, at most 200 characters, pitching a startup idea so strange it sounds like a joke, yet specific enough that a reader can see the customers and the money.

## The pitch

> We sell $19 funerals for dead Tamagotchis and deleted game saves, because grown gamers will pay to grieve the childhoods they can't reload.

A $19 funeral service for dead Tamagotchis and deleted game saves. The customers are grown gamers; the product is a small ritual for the childhoods they cannot reload — and nostalgia is a market that already pays.

## How it works

`main.ts` (Node 22+) writes the pitch sentence to `/output/entry.txt`:

```sh
node main.ts
```

Dry-run the gate without writing anything:

```sh
node main.ts --check
# pitch OK: 139 characters
```

The output is one line of UTF-8 text, 139 characters, no trailing newline — inside the competition gate of 1–200 characters, not only whitespace.

## License

MIT — see [LICENSE](LICENSE).
