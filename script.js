function indexOfIgnoreCase(s1, s2) {
	s1 = s1.toLowerCase()
	s2 = s2.toLowerCase()
	console.log(s2)
  // write your code here
	for(let i = 0; i < s1.length - s2.length + 1; i++){
		let substr = s1.substring(i, i + s2.length)
		console.log(substr)
		if(substr === s2){
			return i;
		}
	}
	return -1;
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");

alert(indexOfIgnoreCase(s1, s2));
