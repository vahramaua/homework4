          //exercise 1


      	const  kiki= function(char, count) {
	   		let str = "";
	   		while(count>0) {
	   			str = str + char;
	   			count = count - 1;
    	    } 
	    		return str;
	   	};
		 const row = function(space, star) {
		 	console.log(kiki(" ", space) + kiki("*", star));
	     };
		 const triangleStar = function(h) {
		 	let star = 2*h - 1;
       	 	let s= 0;
		 	while(h>0) {
       			row (s, star)
        		s= s+1
		 		star = star - 2;
		 		h = h - 1;
		 	}
		 };
		 triangleStar(4);


		 //exercise 2


		 const multitoSingle= function(arr) {
			let newarr = [];
   		    let arrIndex = 0;
			while(arrIndex < arr.length) {
		 		const gigi = arr[arrIndex];
      			arrIndex = arrIndex + 1;
       			let index = 0;
	    		 while(index < gigi.length) {
        			newarr[newarr.length] = gigi[index];
        			index = index + 1; 
	     	     }
			}
       		  return newarr;
		};
		console.log(multitoSingle([[1,2,3], [7,8,9]]));


		//exercise3 :D ????????


		const findMinMax = function(arr, condition) {
			let index = 0;
			let output = arr[0];
        	if(condition=== true) {
				while(index < arr.length) {
					if(output < arr[index + 1]) {
						output = arr[index + 1];

					}
					index = index + 1;
				}

			}
             else if (condition=== false) { 
			while(index < arr.length) {
				if(output > arr[index + 1]) {
	  				output = arr[index + 1];
				}
				index = index + 1;
			   }
			   }
    		  return output
		};
		console.log(findMinMax([6,148,4,3,2,889,0,-8,9], true));


		//exercise 4


		const forEach = function(arr, func) {
			let arrIndex = 0;
			while(arrIndex < arr.length) {
				func(arr[arrIndex]);
				arrIndex++;
			}
		};
		forEach([1, 3, 4], function(val) {
			console.log(val);
		});


		//exercise 5


		const sum = function(arr) {
			let index = 0;
			let result = 0;
			while(index<arr.length) {
				result = result + arr[index];
				index++;
			}
		return result;
		};
		console.log(sum([2, 4, 5]));

  
    	//exercise 6


		const reverse = function(a) {
			let index = a.length-1;
			let result = '';
			while(index>=0) {
				result = result + a[index];
				index--;
			}
		return result;
		};
		console.log(reverse('Tiko'));


      	//exercise 7


		const print = function(size, symbol) {
			let count = 0;
			let result = '';
				while(count<size) {
					result = result + symbol;
					count++;
				}
		return result;
		};
		const checkboard = function(size) {
			let count = 1;
			while(count<size) {
				let result = '';
				if(count%2===0) {
					result = result + ' ';
				} 
				result = result + print(size, '*');
				console.log(result);
				count++;
			}
		
		};
		checkboard(5);