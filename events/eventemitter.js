var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a laugh!');
};

//Assign the eventhandler to an event:
eventEmitter.on('laugh', myEventHandler);

//Fire the 'laugh' event:
eventEmitter.emit('laugh');
