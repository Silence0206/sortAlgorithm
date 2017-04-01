// watchify quickSort2.js -t [babelify] -o test_out.js -v
// -v -t是参数 -v是每次更新你能看到它的提示
var ar = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85]

function quickSort(ar,low,high){
	if(low < high){
		let X=ar[low]
		let i = low
		let j =high
		while(i<j){
			while(i<j && ar[j] > X){
				j -=1
			}
			if(i <j ){
				ar[i] = ar[j]
				i +=1 
			}
			while(i < j && ar[i] < X){
				i +=1
			}
			if(i < j){
				ar[j] = ar[i]
				j -=1
			}
		}
		ar[i] = X
		quickSort(ar,low,i-1)
		quickSort(ar,i+1,high)
	}
	 
}


quickSort(ar,0,ar.length-1)
console.log("result")
console.log(ar)