const { EventEmitter } = require('events');
const { addListener } = require('./TutoringApp/models/User');
const myEmitter = new EventEmitter();

myEmitter.on('hello', () => {
    console.log('this event was called');
});

myEmitter.emit('hello')



// EXPLAINATION 
// event(bellring) =listeners = addListener= handler

// EventEmitter.addListener('bellring', bellringhandler);