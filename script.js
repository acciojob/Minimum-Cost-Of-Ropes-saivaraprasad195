function insertCost(arr , value){
	let  i= arr.length-1;
	while(i>=0 && arr[i]>value){
		arr[i+1] =arr[i];
		i--;
	}
	arr[i+1] = value;
}


function calculateMinCost() {
  //your code here
	let input = document.getElementById("rope-lengths");
	let inputText = input.value;

	let arr = inputText.slice(",").map( (item) => {
		parseInt(item);
	})

	arr.sort((a,b) => a-b);
	let totalCost = 0;
	while(arr.length > 1){
		let len1 = arr.shift();
		let len2 = arr.shift();

		let cost = len1+len2;
		totalCost += cost;

		insertCost(arr , cost);
	}

	return totalCost;
	
}  
