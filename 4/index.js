const fs = require('fs')
new Promise((resolve, reject) => {
	fs.readFile('1.txt', err => {
		if (err) {
			console.log(5, err)
		} else {
			console.log(7)
			resolve(1)
		}
	})
})
	.then(val => {
		console.log('12', val)
		return new Promise((resolve, reject) => {
			fs.readFile('2.txt', err => {
				if (err) {
					console.log(17, err)
				} else {
					console.log(19)
					resolve(2)
				}
			})
		})
	})
	.then(val => {
		console.log('31', val)
	})

const getPromise = fn => {
	return new Promise(fn)
}
