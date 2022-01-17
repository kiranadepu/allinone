// Synchronous basically means that you can only execute one thing at a time
console.log('Venkatesh');
console.log('Mogili');
setTimeout(() => {
	calculate();
}, 1000);
console.log('JS Course');
console.log('JS Course');
console.log('JS Course');
console.log('JS Course');
console.log('JS Course');

function calculate() {
	let sum = 0;
	for (let i = 0; i < 1000000000; i++) {
		sum += i;
	}
	console.log('Math result ', sum);
}
