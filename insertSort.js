// watchify insertSort.js -t [babelify] -o test_out.js -v
//从小到大排序
var ar = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85]


function insertSort(ar) {
	let sign
	for(let i =1;i<ar.length;i++){
		if(ar[i] <ar[i-1]){
			sign = ar[i]
			for(var j =i-1;ar[j]>sign;j--){
				ar[j+1] = ar[j]
			}
			ar[j+1] = sign
		}
	}
}
insertSort(ar)
console.log(ar)