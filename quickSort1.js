// watchify test.js -t [babelify] -o test_out.js -v
// -v -t是参数 -v是每次更新你能看到它的提示
var ar = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85]


function quickSort(ar,low,high){
	let i = low
	let j = high
	let X=ar[low]
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
	return i
	 
}
function qk(ar,low,high){
	if(low < high){
		let x = quickSort(ar,low,high)
		qk(ar,low,x-1)
		qk(ar,x+1,high)

	}
	
}
qk(ar,0,ar.length-1)
console.log(ar)