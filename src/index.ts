import Event from "./Event";

const event = new Event();

event.on('mouse', (x, y) => {
  console.log(x * x, y * y);
});

event.emit('keyboard');
event.emit('mouse', 10, 100);
event.emit('enter');
event.emit('escape');
