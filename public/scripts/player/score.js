function calculateScore()
{
	var rounds = state.rounds;
	var profit = 0;
	for(int i = 0; i < rounds.length; i++)
	{
		var price = round[i].tradePrice;
		if(price = null) { continue; }
		else { profit += price; }
	}
}

function displayScore() { document.getElementById("info_score").innerHTML = String(calculateScore()); }