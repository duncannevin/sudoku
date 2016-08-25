var validSolution = function(board){
	//Checks a row to see if it contains 1 through 9...
	var checkRow = function(rows){
		//Using reduce in order to check if all the numbers are in sequential order...
		return rows.reduce((memo, currVal, index, array)=>{
			//sort the row..
			currVal.sort();
			//Check numbers, if current value does not equal next val+1 change memo to false...
			
			for(var i = 0; i<currVal.length; i++){
				if(currVal[i] !== (i+1)){
					memo = false;
				}
			}
			return memo;
		}, true);
	};
	//change veritcal rows into subarrays in horizontal fasion...
	var createVertRow = function(rows){
		//no need to create the subarrays each time the function is called,
		//just create them now for a faster algorithm...
		var newArrays = [[], [], [], [], [], [], [], [], []];
		//push the values to newarray in the correct order...
		rows.slice().forEach((val, index, array)=>{
			//use a for loop for easy counting...
			for(var i = 0; i<val.length; i++){
				newArrays[i].push(val[i]);
			}
		});
		return checkRow(newArrays);
	};
	//Write a function that changes the 9x9 boxes into sub arrays...
	var createBoxRow = function(rows){
		var newArrays = [[], [], [], [], [], [], [], [], []];
		//Create a function that will push the appropriate values the there
		//sub-array...
		var pushFunction = function(x, y, pushTo){
			for(var j = x; j<y; j++){
				newArrays[pushTo].push(rows[i][j])
			}
		};
		//Break down the original array and call the pushFunction to creat
		//new array...
		for(var i = 0; i < 9; i++){
			for(var j = 0; j <= 6; j+=3){
				pushFunction( j, j+3, i);
			}
		}
		//call checkRow to see if we have the correct numbers...
		return checkRow(newArrays);
	};

	if(createBoxRow(board) && createVertRow(board) && checkRow(board)){
		return true;
	}else{
		return false;
	}

};

console.log(validSolution( [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
	                        [6, 7, 2, 1, 9, 5, 3, 4, 8],
	                        [1, 9, 8, 3, 4, 2, 5, 6, 7],
	                        [8, 5, 9, 7, 6, 1, 4, 2, 3],
	                        [4, 2, 6, 8, 5, 3, 7, 9, 1],
	                        [7, 1, 3, 9, 2, 4, 8, 5, 6],
	                        [9, 6, 1, 5, 3, 7, 2, 8, 4],
	                        [2, 8, 7, 4, 1, 9, 6, 3, 5],
	                        [3, 4, 5, 2, 8, 6, 1, 7, 9]]));

console.log(validSolution(  [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
	                         [6, 7, 2, 1, 9, 0, 3, 4, 8],
	                         [1, 0, 0, 3, 4, 2, 5, 6, 0],
	                         [8, 5, 9, 7, 6, 1, 0, 2, 0],
	                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
	                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
	                         [9, 0, 1, 5, 3, 7, 2, 1, 4],
	                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
	                         [3, 0, 0, 4, 8, 1, 1, 7, 9]]));
