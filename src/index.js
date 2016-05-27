/** Service module. Loads every listener and binds them to a queue.
 * @module service
 */
require('dotenv').config({ silent: true });
require('@dialonce/boot')({
  LOGS_TOKEN: process.env.LOGS_TOKEN,
  BUGS_TOKEN: process.env.BUGS_TOKEN
});

/* var amqp = require('bunnymq')({ consumerSuffix: process.env.LOCAL_QUEUE }),
  winston = require('winston');*/

/**
 * define here all of your queues to consumer messages from the broker, ie:
 * amqp.consumer.consume('hello:world', (msg) => { winston.log(msg); } );
 * if the caller expect a response, you can give it some by returning something in the function (can be a promise)
 * amqp.consumer.consume('hello:world', (msg) => { return msg; } );
 */

/* eslint no-console: "off"*/
console.log('Hello world!');
