var quotes = [
    'first quote', 'second quote', 'third quote'
]
function savyQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}