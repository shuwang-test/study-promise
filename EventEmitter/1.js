const EventEmitter = require('events').EventEmitter
const emitter = new EventEmitter()

emitter.on('test', (a, b, c) => {
	console.log(a, b, c)
})
emitter.emit('test', 'a', 'b', 'c')
