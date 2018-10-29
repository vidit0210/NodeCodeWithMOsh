const EventListener = require('events');

const event = new EventListener();

event.on("Message",function(){
    console.log("Got the Message");
})

event.emit("Message");