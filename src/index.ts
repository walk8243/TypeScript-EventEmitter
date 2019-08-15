import { Event, EventEnum } from "./Event";

const event = new Event();

event.emit(EventEnum.Keyboard);
event.emit(EventEnum.Mouse, 10, 100);
event.emit(EventEnum.Enter);
