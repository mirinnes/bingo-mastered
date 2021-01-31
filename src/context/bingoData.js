// Phrases for Card
export const cellTexts = [
  '(child noises in the background)',
  'Hello, hello?',
  'i need to jump in another call',
  'can everyone go on mute?',
  'could you please get closer to the mic?',
  '(load painful echo/feedback)',
  'Next slide, please',
  'can we take this offline?',
  'is _____ on the call?',
  'Could you share this slides afterwards?',
  'can somebody grant presenter rights?',
  'can you email that to everyone?',
  'Sorry I had problems loging in',
  '(animal noises in the background)',
  "Sorry, i didn't found the conference id",
  'I was having connection issues',
  "I'll have to get back to you",
  'who just joined?',
  'sorry, something _____ with my calendar',
  'Do you see my screen?',
  "let's wait for _____ !",
  'You will send the minutes?',
  'sorry, i was on mute',
  'can you repeat please?',
];

// Arrray with random indexes
let arrr = [];
while (arrr.length < cellTexts.length) {
  let r = Math.floor(Math.random() * 24);
  if (arrr.indexOf(r) === -1) arrr.push(r);
}

export let arr = arrr;
