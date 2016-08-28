//Variable storing gameboard, use closure in order to store the gameboard with updated values...
var liveGameBoard = function(){
	var board = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
				 [0, 0, 0, 0, 0, 0, 0, 0, 0],
				 [0, 0, 0, 0, 0, 0, 0, 0, 0],
				 [0, 0, 0, 0, 0, 0, 0, 0, 0],
				 [0, 0, 0, 0, 0, 0, 0, 0, 0],
				 [0, 0, 0, 0, 0, 0, 0, 0, 0],
				 [0, 0, 0, 0, 0, 0, 0, 0, 0],
				 [0, 0, 0, 0, 0, 0, 0, 0, 0],
				 [0, 0, 0, 0, 0, 0, 0, 0, 0]];
	
	return function updateBoard(ind1, ind2, val){
		board[ind1][ind2] = val;
		//Returns a boolean...
		if(validSolution(board)){
			alert('Good job stud!');
		}
	};		 
};
var disBoard = liveGameBoard();
//Function that will only allow valid entries 1-9
var isNumber1To9 = function(evt){
	var charCode = (evt.which) ? evt.which : evt.keyCode;
	if(charCode > 31 && (charCode < 48 || charCode > 57)){
		return false;
	}else{
		return true;
	}
}
//Function to gather the entered value...
var whatIsEntered = function(loc){
	return loc.value;
};
//When a key is pressed get the location of the entry and the value, then uses closer with livegameboard to store the value...
var getSelectionInfo = function(ind1, ind2){
	var getTheDigit = Number(whatIsEntered(document.getElementById('dis' + ind1 + ind2 + '')));
	console.log([ind1, ind2, getTheDigit]);
	disBoard(ind1, ind2, getTheDigit);
};
//Load board on pageload...
$(document).ready(function(){
	assembleBoard();
});