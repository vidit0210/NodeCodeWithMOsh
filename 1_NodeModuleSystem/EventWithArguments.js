const EventEmitter = require('events');
const event = new EventEmitter();

event.on('Message', (args)=>{ console.log('Message Recieved',args)});

event.emit('Message',{name:'Vidit'});

