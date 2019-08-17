import { EventEmitter } from 'events';

export default class Event extends EventEmitter {
  constructor() {
    super();

    this.on('keyboard', this.eventListenerKeyboard);
    this.on('enter', this.eventListenerEnter);
    this.on('escape', () => {});
    this.on('mouse', this.eventListenerMouse);
  }

  private eventListenerKeyboard() {
    console.log('aaa');
  }
  private eventListenerEnter() {
    console.log('bbb');
  }
  private eventListenerMouse(x: number, y: number) {
    console.log(x, y);
  }  

  on(event: 'keyboard', listener: Event['eventListenerKeyboard']): this;
  on(event: 'enter' | 'escape', listener: Event['eventListenerEnter']): this;
  on(event: 'mouse', listener: Event['eventListenerMouse']): this;
  on(event: EventType, listener: (...args: any[]) => void) {
    return super.on(event, listener);
  }

  emit(event: 'keyboard'): boolean;
  emit(event: 'enter' | 'escape'): boolean;
  emit(event: 'mouse', x: number, y: number): boolean;
  emit(event: EventType, ...args: any[]) {
    return super.emit(event, ...args);
  }
}

type EventType = 'keyboard' | 'enter' | 'escape' | 'mouse';
