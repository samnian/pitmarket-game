var help;

function getContext(id) { return document.getElementById(id); }

function defaultText()
{
	div = getContext("help_text");
	var html = "<h1>First Time?</h1><p>Use the buttons below to learn more about the game</p>";
	div.innerHTML = html;
}
function about()
{
	// Get Context
	div = div = getContext("help_text");

	// Crete html
	var html = "<h1>About the Pit Market Game</h1>"
	html += "<p>The pit market game is a game used to demonstrate how the free market will eventually come to settle on a fair price for goods and services.</p>"
	html += "<p>The pit market game is traditionally played in a classroom where the players are free to move around<p>"
	html += "<p>TODO</p>";

	// Set the html
	div.innerHTML = html;
}
function rules()
{
	// Get Context
	div = div = getContext("help_text");

	// Crete html
	var html = "<h1>Rules of the Pit Marget Games</h1>"
	
	html += "<p>Every player will be assigned a card at random. This card will tell you whether you are buying or selling, and what your card is worth.</p>"
	html += "<p><b>Buyers</b> are unable to buy a card for more than their card's value<br/>";
	html += "<b>Sellers</b> are unable to sell a card for less than their card's value</p>";

	html += "<p>Every round, you may make offers that other player's can see and accept. You will also be able to see offers made by other players which you can accept.</p>"
	html += "<p>The goal is to make as much profit as possible, which is calculated as the difference between your card and the value at which you traded. The good deals will go quickly! It's up to you to determine what the best deals are.</p>"

	html += "<p>These are all the rules for the base game, but the host can introduce more advanced rules later. Check out the special rules using the button below."
	// Set the html
	div.innerHTML = html;
}
function how()
{
	// Get Context
	div = div = getContext("help_text");

	// Crete html
	var html = "<h1>How to play the game</h1>"
	html += "TODO"
	// Set the html
	div.innerHTML = html;
}

function special()
{
	// Get Context
	div = div = getContext("help_text");

	// Crete html
	var html = "<h1>Special Rules</h1>"
	html += "<p> The host of the game may introduce special rules for a round or for a whole game. Any special rules will be displayed on the screen during the round and on the lobby screen.<p>"
	
	// Tax
	html += "<h2>Tax</h2>";
	html += "<p><b>Tax</b> will be a flat cost that the <emp>seller</emp> must pay when they successfully sell a card."
	html += " For example;</p><p style='text-indent :1em;'>" + "If a card of value <u>$10</u> is sold for a value of <u>$15</u> and there is currently a <u>$2</u> tax in place, the seller will have <u>$5</u> of before-tax profit, then after paying the <u>$2</u> tax will have a net gain of <u>$3</u> for the round</p>";
	html += "<p>Sale Value - Card Value - Tax = Profit<br />"
	html += "$15 - $10 - $2 = $3<p>"
	html += "<p>Tax is a real-world phenomenon that governments impose on the sale of goods and services in everyday life and this rule will demonstrate how tax may affect the free market."
	// Price ceiling/floor
	html += "<h2>Price Ceiling/Floor</h2>";
	html += "<p>When there is either a price ceiling or floor in place, there is a limit to how much a card can be brought or sold at. A price floor sets a minimum value that a card can be sold at and a price ceiling reflects a maximum value. During any particular round, there will only be <emp>one</emp> of either option and never both.<p>"
	html += "<p>The <b>floor</b> may reprent a minimum cost of production of the goods or services for a company."
	html += "<br />The <b>ceiling</b> may represent a price cap enforced on seller by a government.</p>"
	html += "<p>Note that <b>it is possible</b> that you will no longer be able to make a trade when this rule is in place. In the real world, compainies could be forced out of a market because of various policies or costs introduced.<p>"

	// Set the html
	div.innerHTML = html;	
}
