
var val1 = ["Jonny", "Mario", "Jane"];
var verb = ["looks", "drinks", "eats"];
var adj = ["pizza", "pasta", "cheese"];





function newQuote(){
// select a random word from the beginning array

var word1 = val1[Math.floor(Math.random() * val1.length)];

// select a random word from the middle array

var word2 = verb[Math.floor(Math.random() * verb.length)];

// select a random word from the end array

var word3 = adj[Math.floor(Math.random() * adj.length)];

var randomQuote = word1 + ' ' + word2 + ' ' + word3;

// console.log(randomQuote);

document.getElementById('quoteDisplay').innerHTML = randomQuote;

}

function myFunction() {
    location.reload();
}




