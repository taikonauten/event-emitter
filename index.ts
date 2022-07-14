import { EventEmitter } from 'eventemitter3';

const eventEmitter = new EventEmitter();

/**
 * Add listener new event listener.
 * The callback function is triggered when an event with the given name has been dispatched.
 * 
 * @param name name of the event to be listening for
 * @param listener callback function, triggered when event is received
 */
function addListener(name: string, listener: (...args: any[]) => void) {
  eventEmitter.addListener(name, listener);
}

/**
 * Remove an existing event listener.
 * 
 * @param name name of the existing event-listener
 * @param listener callback function
 */
function removeListener(name: string, listener: (...args: any[]) => void) {
  eventEmitter.removeListener(name, listener);
}

/**
 * Dispatch new event with given name and arguments.
 * 
 * @param name name of the event
 * @param args
 */
function emit(name: string, args: any[]) {
  eventEmitter.emit(name, args);
}

export default {
  addListener,
  emit,
  removeListener,
};
