function calculateScore()
{
	var rounds = state.rounds;
	var profit = 0;
	var cardValue = state.card;

	for(var i = 0; i < rounds.length; i++)
	{
		var price = rounds[i].tradePrice;

		if(price == null) { continue; }
		else { 
			if(state.isSeller == true){
				tempProfit = price - cardValue;
				profit += tempProfit;
			} else { 
				tempProfit = cardValue - price;
				profit += tempProfit;
			}
			
		}
	}
	return profit
}

function displayScore() { 
	document.getElementById("info_profit_lobby").innerHTML = '$' + String(calculateScore()); 
	document.getElementById("info_profit_round").innerHTML = '$' + String(calculateScore());
}

/* DEBUG FUNCTIONS */
function setScoreDISPLAY(score) { document.getElementById("info_profit").innerHTML = '$' + String(score); }
