let fn1 = (resolve, reject) => {
	setTimeout(() => {
		console.log(1)
		resolve('this is first resolve')
	}, 500)
}

let fn2 = (resolve, reject) => {
	setTimeout(() => {
		console.log(2)
		resolve('this is second resolve')
	}, 500)
}
;(function() {
	function SWPromise(resolver) {
		this._status = 'pending'
		resolver(resolve, reject)
	}
	function resolve() {}
	function reject() {}
	SWPromise.prototype.then = function(onResolve, onReject) {
		var promise = new SWPromise(function() {})
		return promise
	}

	window.SWPromise = SWPromise
})()

new SWPromise(fn1).then(function() {})
