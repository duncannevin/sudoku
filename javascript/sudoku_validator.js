var validSolution = function(board){
	//Checks a row to see if it contains 1 through 9...
	
	var checkRow = function(rows){
		//Using reduce in order to check if all the numbers are in sequential order...
		return _.reduce(rows ,(memo, currVal, index, array)=>{
			//sort the row..
			currVal.sort();
			//Check numbers, if current value does not equal next val+1 change memo to false...
			_.each(currVal, (val, index, array)=>{
				if(val !== index+1){memo = false};
			});
			return memo;
		}, true);
	};
	//change veritcal rows into subarrays in horizontal fasion...
	var createVertRow = function(rows){
		//no need to create the subarrays each time the function is called,
		//just create them now for a faster algorithm...
		var newArrays = [[], [], [], [], [], [], [], [], []];
		//push the values to newarray in the correct order...
		_.each(rows.slice(), (val, index, array)=>{
			_.each(val, (val2, index2, array2)=>{
				newArrays[index2].push(val[index2]);
			});
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
