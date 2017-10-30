/** Service module. Loads every listener and binds them to a queue.
 * @module service
 */
require('dotenv').config({ silent: true });

require('logtify-logstash')();
require('logtify-bugsnag')();
const { logger } = require('logtify')({ presets: ['dial-once', 'prefix'] });

// const amqp = require('bunnymq')({ consumerSuffix: process.env.LOCAL_QUEUE });

/**
 * define here all of your queues to consumer messages from the broker, ie:
 * amqp.consumer.consume('hello:world', (msg) => { logger.log('info', msg); } );
 * if the caller expect a response, you can give it some by returning something in the function (can be a promise)
 * amqp.consumer.consume('hello:world', (msg) => { return msg; } );
 */

logger.info('Hello world!');
