$(document).ready(function(){
	var assembleBoard = function(){
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
		//write a function that grabs random numbers from the winningBoard.			        
		var grabRandoms = function(row){
			
		};			        

		//Use a for loop to create the board			        
		for(var i = 1; i < 10; i++){
			$('.gameBoard').append('<div class="row number'+ i +'"></div>');
			for(var j = 1; j < 10; j++){
				
				$('.number' + i).append('<div class="square"></div>');
		
			}
		}				        
	};
	assembleBoard();
});
