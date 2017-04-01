 let arr = [2,3,4,6,1,10,0,8]

function bubbleSort(ar,length){
	for(let i = 0; i<length-1; i++){
		let flag = false
		for (let j=length-1 ; j>i ; j--)
		{
			if(ar[j] < ar[j-1]){

				let temp = ar[j]
				ar[j] = ar[j-1]
				ar[j-1] = temp

				flag = true
			}

		}
		if(flag = false)
			return
	}
}
bubbleSort(arr,8)
console.log(arr)