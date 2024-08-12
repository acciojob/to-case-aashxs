function toCase(text) {
  // write your code here
	if(text.length==0){
		return "-";
	}
	else{
		let new=text.toUpperCase;
		let new2=text.toLowerCase;
		lt ans=`${new2}-${new}`;
		return ans;
	}
}

// DO not change the code below

// const text = prompt("Enter text:");
// alert(toCase(text));
