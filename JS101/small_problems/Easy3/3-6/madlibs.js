function madlibs() {
  let rlsync = require('readline-sync');

  let noun = rlsync.question('Please enter a noun\n');
  let verb = rlsync.question('Please enter a verb (infinitive- e.g. walk, hike)\n');
  let adjective = rlsync.question('Please enter an adjective\n');
  let adverb = rlsync.question('Please enter an adverb\n');

  let story1 = `\nDo you ever ${verb} someone's ${adjective} ${noun} ${adverb}? That's intense, man!\n`;
  let story2 = `It says in the paper that the local sheriff ${adverb} ${verb}s the ${adjective} ${noun} in the prison\n`;
  let story3 = `The first person to ${verb} the island's ${adjective} salamander will ${adverb} receive a special ${noun}`;

  console.log(story1);
  console.log(story2);
  console.log(story3);

}

madlibs();