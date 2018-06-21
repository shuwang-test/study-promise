let fn1 = (resolve, reject) => {
	setTimeout(() => {
		console.log(1)
		resolve('this is first resolve')
		reject('this is first reject')
	}, 500)
}

let fn2 = (resolve, reject) => {
	setTimeout(() => {
		console.log(2)
		resolve('this is second resolve')
	}, 500)
}
new Promise(fn1)
	.then(
		function(val) {
			console.log(val)
			return new Promise(fn2)
		},
		function(err) {
			console.log(err)
			return new Promise(fn2)
		}
	)
	.then(function(val) {
		console.log(val)
	})

function SWPromise(resolver) {
	this._status = 'pending'
	resolver(resolve, reject)
}
SWPromise.prototype.then = function(onResolve, onReject) {
	var promise = new SWPromise(function() {})
	return promise
}
