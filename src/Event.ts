import { EventEmitter } from 'events';

export class Event extends EventEmitter {
  constructor() {
    super();

    this.on(EventEnum.Keyboard, this.eventListenerKeyboard);
    this.on(EventEnum.Enter, this.eventListenerEnter);
    this.on(EventEnum.Mouse, this.eventListenerMouse);
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

  on(event: EventEnum.Keyboard, listener: Event['eventListenerKeyboard']): this;
  on(event: EventEnum.Enter, listener: Event['eventListenerEnter']): this;
  on(event: EventEnum.Mouse, listener: Event['eventListenerMouse']): this;
  on(event: string, listener: (...args: any[]) => void) {
    return super.on(event, listener);
  }

  emit(event: EventEnum.Keyboard): boolean;
  emit(event: EventEnum.Enter): boolean;
  emit(event: EventEnum.Mouse, x: number, y: number): boolean;
  emit(event: string, ...args: any[]) {
    return super.emit(event, ...args);
  }
}

export enum EventEnum {
  Keyboard = 'keyboard',
  Enter = 'enter',
  Mouse = 'mouse',
};
