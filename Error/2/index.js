try {
	setTimeout(() => {
		throw new Error('this is a test')
	}, 0)
} catch (e) {
	console.log(e)
}
setTimeout(() => {
	try {
		throw new Error('this is a test')
	} catch (e) {
		console.log(e)
	}
}, 0)
