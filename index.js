const express = require('express');
const EventEmmitter = require('events').EventEmitter;

const app = express();
const event = new EventEmmitter();

setTimeout(() => event.emit('custom'), 3700);

event.on('custom', () => console.log('event worked...'));

