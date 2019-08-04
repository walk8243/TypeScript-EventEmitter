import { EventEmitter } from "events";

export default class Event extends EventEmitter {
  constructor() {
    super();
    this.on('event', () => {
      console.log('event');
    });
  }
}
