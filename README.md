<p align="center">
  <img src="https://i.imgur.com/dV1aZjJ.png" title="Taikonauten">
</p>

<h1 align="center">Taikonauten event-emitter</h1>

Event-emitter is a wrapper library to abstract access to underlying event emitter libraries. In this case [EventEmitter3](https://github.com/primus/eventemitter3) is used.

The benefit of using this library is to be able to quickly replace the event emitter implementation without changing the signature of existing code.

## Installation

```shell
npm install --save @taikonauten/event-emitter
```

## Usage

```ts
import emitter from '@taikonauten/event-emitter';

const callback = (params) => {
  console.log('test-event fired with params', params);
});

// add a listener
emitter.addListener('test-event', callback);

const testData = {
    message: 'success',
    event: 'test-event',
};

// emit the event
// result: test-event fired with params {message: 'success', event: 'test-event'}
emitter.emit('test-event', testData);

// remove the listener at any time
emitter.removeListener('test-event', callback);
```

---

Made with ♡ at Taikonauten