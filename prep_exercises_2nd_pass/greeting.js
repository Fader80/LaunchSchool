let greetingMessage = 'Good Morninng';

function greetPeople() {
console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage('Good Evening');
greetPeople();
