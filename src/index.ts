import Event from "./Event";

const event = new Event();

event.emit('keyboard');
event.emit('mouse', 10, 100);
event.emit('enter');
event.emit('escape');
