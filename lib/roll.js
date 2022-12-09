export function roll(sides, dice, rolls) {
	var dicethrow = {
		  dice_sides: sides,
		  roll: function () {
			      var randomNumber = Math.floor(Math.random() * this.dice_sides) + 1;
			      return randomNumber;
			    }
	}
	const results = [];
	for (let i = 0; i < rolls; i++) {
		var sum = 0;
		for (let j = 0; j < dice; j++) {
			sum = sum + dicethrow.roll();
		}
		results.push(sum);
	}
	const output = {
		 	 "sides": sides,
		  	 "dice": dice,
		         "rolls": rolls,
		         "results": results
		 }
	return JSON.stringify(output);
}
