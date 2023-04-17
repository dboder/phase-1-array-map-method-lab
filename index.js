const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function capitializedWords(phrase) {
  let splitElement = phrase.split(" ");
  let blah  = [];
  for (let index = 0; index < splitElement.length; index++) {
    blah[index] = splitElement[index][0].toUpperCase() + splitElement[index].substring(1,splitElement[index].length);
  }
  return blah.toString().replaceAll(","," ");
}

const titleCased = () => {
  return tutorials.map(capitializedWords);
}
