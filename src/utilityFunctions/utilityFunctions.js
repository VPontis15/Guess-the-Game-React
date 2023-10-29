export function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export function CheckForLetter(letter, guess) {
  return letter === guess;
}

export function loopArrayToCheckCondintion(arr, letter) {
  [...arr].forEach((i) => {
    if (i === letter) return letter;
  });
}
