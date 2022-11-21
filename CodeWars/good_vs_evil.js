const GOOD_STRENGTHS = {
  "hobbits": 1,
  "men": 2,
  "elves": 3,
  "dwarves": 3,
  "eagles": 4,
  "wizards": 10
}

const EVIL_STRENGTHS = {
  "orcs": 1,
  "men": 2,
  "wargs": 2,
  "goblins": 2,
  "uruk hai": 3,
  "trolls": 5,
  "wizards": 10
}

function getTeamsStrength(good, evil) {
  const goodUnits = good
    .split(" ")
    .map(i => parseInt(i))

  const evilUnits = evil
    .split(" ")
    .map(i => parseInt(i))

  return {
    "good": Object
      .values(GOOD_STRENGTHS)
      .map((item, index) => item * goodUnits[index])
      .reduce((sum, item) => sum + item),

    "evil": Object
      .values(EVIL_STRENGTHS)
      .map((item, index) => item * evilUnits[index])
      .reduce((sum, item) => sum + item)
  }
}

function goodVsEvil(good, evil) {
  const strengths = getTeamsStrength(good, evil)

  if (strengths.good > strengths.evil)
    return "Battle Result: Good triumphs over Evil"

  if (strengths.good < strengths.evil)
    return "Battle Result: Evil eradicates all trace of Good"

  return "Battle Result: No victor on this battle field"
}
