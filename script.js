function toCase(text) {
  // write your code here
	if(text.length==0){
		let a="-";
		return a;
	}
	else{
		let new1=text.toUpperCase();
		let new2=text.toLowerCase();
		let ans=`${new2}-${new1}`;
		return ans;
	}
}

// DO not change the code below

const text = prompt("Enter text:");
 alert(toCase(text));
