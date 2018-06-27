let start = new Date()
setTimeout(() => {
	let end = new Date()
	console.log(end - start)
}, 500)
while (new Date() - start < 1000) {}
