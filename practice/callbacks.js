// const axios = require('axios');
/*
1.Passing 10 as the initial value to Step1
2.If there is no error, then passing the result to Step2
3.If there is no error again, then passing the result to Step3
4.Finally, printing the result.
*/
let value1 = parseInt(process.argv[2]);
console.log('Results ' +  value1);

step1(value1, (result1, error) =>{
	if (!error) {
		step2(result1, (result2, error) =>{
			if (!error) {
				step3(result2, (result3, error) =>{
					if (!error) {
						console.log('Results ' + result3);
					}
				});
			}
		});
	}
});

// let value1 = process.argv[2];
// console.log('Results ' + value1);
// step1(value1)
function step1(value1, callback){
	callback(value1 + 10, false);
}

function  step2(value, callback){
	callback(value + 10, false);
}

function  step3(value, callback){
	callback(value * 10, false);
}
