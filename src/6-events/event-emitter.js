// NodeJS's apps relies heavily on EVENT-DRIVEN DEVELOPMENT.
// when we execute "require('events')" we get back EventEmitter CLASS,
// so there is a convention to call the identifier "EventEmitter" too:
const EventEmitter = require('events');

// make an instance to access props
const customEmitter = new EventEmitter();

// set up event listener:
// - pass the name of event to listen for
// - pass a callback that should be invoked when the event happens
// - callback can receive any number of arguments(>=0) we want
customEmitter.on('response', (name, id) => {
  console.log(`data received: ${name} ${id}`);
});

// we can have as many event listeners as we want for the same event
customEmitter.on('response', () => {
  console.log('some other logic');
});

// emit(create) the event AND pass arguments we want
customEmitter.emit('response', 'john', 34); // it is handled by previously set up listener and logs "data received"
