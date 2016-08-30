//Wrap the board assembly in a function so it can be used in any format in the DOM...
var assembleBoard = function(){
	//Write a function that makes a random board pattern, then checks it
	//to see if it is a valid pattern, if it is this will be the pattern 
	//for this game...
	


	//Write a function that creates the original boards layout based on a winning combonation, should also include
	//all the form elements for input...
	var createBoardPattern = function(){
		//Create a variable with a winning board in order to populate the template
		var winningBoard = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
					        [6, 7, 2, 1, 9, 5, 3, 4, 8],
					        [1, 9, 8, 3, 4, 2, 5, 6, 7],
					        [8, 5, 9, 7, 6, 1, 4, 2, 3],
					        [4, 2, 6, 8, 5, 3, 7, 9, 1],
					        [7, 1, 3, 9, 2, 4, 8, 5, 6],
					        [9, 6, 1, 5, 3, 7, 2, 8, 4],
					        [2, 8, 7, 4, 1, 9, 6, 3, 5],
					        [3, 4, 5, 2, 8, 6, 1, 7, 9]];	
					        			        		        
		//Create a newBoard that will have between 1 and 5 correct numbers in each row...			        
		var newBoard = _.map(winningBoard, (sub, ind)=>{
			//Create an array with 0 - 8 random numbers between 0 - 9 that will be the random indexes...
			var indexes = [];
			while(indexes.length < 5){
				var randomNum = Math.floor(Math.random() * 10);
				if(!_.some(indexes, (curr)=>{return randomNum === curr})){
					indexes.push(randomNum);
				}
			}
			return _.map(sub, (val, ind2, arr)=>{
				if(_.some(indexes, (num)=>{return num === val})){
					//adds these values to the current game board...
					disBoard(ind, ind2, val);
					return val;
				}else{
					return '<input id="dis' + ind + ind2 + '" class="userEntry" type="text" maxlength="1" onkeypress="return isNumber1To9(event)" onkeyup="getSelectionInfo(' + ind + ', ' + ind2 + ')"></input>';
				}
			});
		});		        
		return newBoard;
	};			        
	//Create a function that builds the board latout and appends it to the DOM...
	var buildBoardLayout = function(pattern){
		//Use a nested for loop to create the board
		var boxCounter = 1;			        			        
		for(var i = 1; i < 10; i++){			
			$('.gameBoard').append('<div class="row number'+ i +'"></div>');
			for(var j = 1; j < 10; j++){				
				$('.number' + i).append('<div class="square box'+ boxCounter +'">' + pattern[i-1][j-1] + '</div>');
				//
				$('.box' + boxCounter).css('border-top', '1px solid black');
				$('.box' + boxCounter).css('border-right', '1px solid black');
				if(i < 9 && i % 3 === 0){
					$('.box' + boxCounter).css('border-bottom', '3px solid black');
				}
				if(j % 9 !== 0 && j % 3 === 0){
					$('.box' + boxCounter).css('border-right', '3px solid black');
				}
				boxCounter++;
			}
		}
	}	
	buildBoardLayout(createBoardPattern());				        
};


