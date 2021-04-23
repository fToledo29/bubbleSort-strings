const bubbleSort_strings = (arr = []) => {

	let i = 0;

	while (i < arr.length -  1) {

		let j = 0;

		while (j < arr.length - 1 - i) {
			
			if (arr[j].localeCompare(arr[j + 1]) > 0){
			
				temp = arr[j];
			
				arr[j] = arr[j + 1];
			
				arr[j + 1] = temp;
			
			}
			j++;
		}
		i++
	}

	return arr;
};

var strArr = ['Mango', 'Banana', 'Strawberry', 'Watermelon', 'Grapes', 'Apple'];

console.log('Input Array: ', strArr);

console.log('');

const res = bubbleSort_strings(strArr);

console.log('');

console.log('Result: ', res);