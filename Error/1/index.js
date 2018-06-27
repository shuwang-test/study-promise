console.log(Error)
try {
	throw new Error('this is a Error test')
} catch (e) {
	console.log(e)
	console.log(Object.keys(e))
}
