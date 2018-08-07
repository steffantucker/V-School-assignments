function addS(arr) {
	let newArr = [];
	for (let i = 0, end = arr.length; i < end; i++) {
		if (typeof arr[i] === 'string') {
			if (arr[i].lastIndexOf('s') === arr[i].length - 1)
				newArr.push(arr[i]);
			else 
				newArr.push(arr[i] + 's');
		} else {
			return 'No numbers allowed'
		}
	}
	return newArr;
}

module.exports = {addS: addS}
