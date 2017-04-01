// watchify shellSort.js -t [babelify] -o test_out.js -v
//从小到大排序
var ar = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85]


function shellSort(ar) {
	let n = ar.length
	for(var gap = Math.floor(n/2); gap>0; gap = Math.floor(gap/2)){
		for(var i = gap ; i < n ; i++){
			if(ar[i] < ar[i-gap]){
				var sign = ar[i]
				for(var j = i-gap ; j>=0 && sign <ar[j] ; j -= gap){
					ar[j+gap] = ar[j]
				}
				ar[j+gap] = sign
			}
		}
	}
}
shellSort(ar)
console.log(ar)