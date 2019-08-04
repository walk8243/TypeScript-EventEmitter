import { EventEmitter } from "events";

export default class Event extends EventEmitter {
  constructor() {
    super();
    this.init();
  }

  init() {
    this.setEventListener();
  }

  setEventListener() {
    this.on('event', this.onEvent);
  }

  onEvent() {
    console.log('event');
  }

  emit(event: 'event'): boolean;
  emit(event: string | symbol, ...args: any[]) {
    return super.emit(event, ...args);
  }

  on(event: 'event', listener: () => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void) {
    return super.on(event, listener);
  }
}
