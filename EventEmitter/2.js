const pub = {
	handles: {}
}
pub.on = function(eventType, handle) {
	if (!(eventType in this.handles)) {
		this.handles[eventType] = []
	}
	this.handles[eventType].push(handle)
	return this
}

pub.emit = function(eventType) {
	let args = Array.prototype.slice.call(arguments, 1)
	if (eventType in this.handles) {
		this.handles[eventType].forEach(function(handle) {
			handle.apply(this, args)
		})
	}
}
// pub.on('test', a => {
// 	console.log(a)
// })
// pub.on('test', (a, b) => {
// 	console.log(a, b)
// })
pub.on('test', (a, b, c) => {
	pub.emit('test')
	console.log(a, b, c)
})

pub.emit('test', 'a', 'b', 'c')
