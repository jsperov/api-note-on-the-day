const express = require('express');
const mongoose = require('mongoose');
const EventEmmitter = require('events').EventEmitter;

const app = express();
const event = new EventEmmitter();

mongoose.connect("mongodb://182485.simplecloud.ru:27017/test", { useNewUrlParser: true })
  .then(() => {
    console.log('connect');
  })
  .catch(err => {
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

setTimeout(() => event.emit('custom'), 3700);

event.on('custom', () => console.log('event worked...'));

