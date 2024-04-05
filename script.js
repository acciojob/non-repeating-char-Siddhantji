function firstNonRepeatedChar(str) {
 // Write your code here
	let count = {};
	for(char of str){
		count[char]=(count[char] || 0)+1;
	}
	for(char of str){
		if(count[char]===1){
			return char;
		}
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
