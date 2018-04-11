let val1 = ["Jonny", "Mario", "Jane","I", "David", "Our neighbors", "Students" , "We", "She", "They", "He", "Many students",
    "The police", "Peter", "My mother", "It", "The train", "The noise", "Her father", "Her eyes",
    "To err", "What he told me", "A glacier", "Jonny", "I looked","You’re",
    "Boxers", "My brother and I", "This laptop computer", "Beloved", "A large dog", "My sister"];
let verb = ["looks", "drinks", "eats","finished", "don't" , "like", "scolded","received", "sings", "did", "resembles",
    "witnessed ","need", "answered", "arrested ","has already crashed" ,"want", "love", "like" , "secured", "pursued", "is teaching ",
    "is", "came", "is writing", "is going", "arrived", "will come", "rained", "worked", "went", "reads",
    "faded", "turn out to be", "waited", "for Jonny and Gina", "help", "driving",
    "should be", "worked", "can be", "loves", "was enjoyed", "play", "speak", "guards", "wasn't able to finish"];
let adj = ["pizza", "pasta", "cheese","the work","puppies", "the boy", "the parcel", "a song", "a lot of work", "his father",
    "intelligent", "French", "the play", "a wild animal", "England", "one of these books",
    "the thief", "in a second-hand bookshop", "to the market", "slowly", "away", "to the party", "human", "a lie",
    "a huge body of ice", "for the train", "at the bus station", "you", "too fast", "here soon",
    "as a journalist", "very friendly dogs", "to the mall last night", "twenty times", "him", "by the class",
    "football", "table tennis", "Chinese", "the house", "his dinner", "many questions", "a novel", "vote"];


function newQuote(){
// select a random word from the beginning array

    let word1 = val1[Math.floor(Math.random() * val1.length)];

// select a random word from the middle array

    let word2 = verb[Math.floor(Math.random() * verb.length)];

// select a random word from the end array

    let word3 = adj[Math.floor(Math.random() * adj.length)];

    let randomQuote = word1 + ' ' + word2 + ' ' + word3;

// console.log(randomQuote);

    document.getElementById('quoteDisplay').innerHTML = randomQuote;

}


function myFunction() {
    document.getElementById('quoteDisplay').innerHTML = null;
}