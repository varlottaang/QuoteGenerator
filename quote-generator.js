
// quote generator function

let content = document.getElementById("content");

function quoteGenerator(quote){

    let beginning, middle, end;

    let randomOne, randomTwo, randomThree;

    let savyQuotes;


// if else statement to select different arrays

    if (quote === 1) {
        beginning = ["I", "David", "Our neighbors", "Students" , "We", "She", "They", "He", "Many students",
                    "The police", "Peter", "My mother", "It", "The train", "The noise", "Her father", "Her eyes",
                    "To err", "What he told me", "A glacier", "Jonny", "I looked","You’re",
                    "Boxers", "My brother and I", "This laptop computer", "Beloved", "A large dog", "My sister"];
        middle = ["finished", "don't" , "like", "scolded","received", "sings", "did", "resembles",
                   "witnessed ","need", "answered", "arrested ","has already crashed" ,"want", "love", "like" , "secured", "pursued", "is teaching ",
                   "is", "came", "is writing", "is going", "arrived", "will come", "rained", "worked", "went", "reads",
                    "faded", "turn out to be", "waited", "for Jonny and Gina", "help", "driving",
                    "should be", "worked", "can be", "loves", "was enjoyed", "play", "speak", "guards", "wasn't able to finish"];
        end = ["the work","puppies", "the boy", "the parcel", "a song", "a lot of work", "his father",
                "intelligent", "French", "the play", "a wild animal", "England", "one of these books",
                "the thief", "in a second-hand bookshop", "to the market", "slowly", "away", "to the party", "human", "a lie",
                "a huge body of ice", "for the train", "at the bus station", "you", "too fast", "here soon",
                "as a journalist", "very friendly dogs", "to the mall last night", "twenty times", "him", "by the class",
                "football", "table tennis", "Chinese", "the house", "his dinner", "many questions", "a novel", "vote"];

        randomOne = beginning[Math.floor(Math.random() * beginning.length)];
        randomTwo = middle[Math.floor(Math.random() * middle.length)];
        randomThree= end[Math.floor(Math.random() * end.length)];
        return randomQuote = randomOne + " " + randomTwo + " " + randomThree;

    } else if (quote === 2) {


        savyQuotes = ["When you reach the end of your rope, tie a knot in it and hang on.",
                        "There is nothing permanent except change.",
                        "Learning never exhausts the mind.",
                        "All that we see or seem is but a dream within a dream.",
                        "No act of kindness, no matter how small, is ever wasted.",
                        "It is far better to be alone, than to be in bad company.",
                        "Honesty is the first chapter in the book of wisdom.",
                        "Not all those who wander are lost.",
                        "If opportunity doesn't knock, build a door.",
                        "What we achieve inwardly will change outer reality.",
                        "Try to be a rainbow in someone's cloud.",
                        "Nothing is impossible, the word itself says 'I'm possible'!",
                        "In three words I can sum up everything I've learned about life: it goes on.",
                        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
                        "Life's most persistent and urgent question is, 'What are you doing for others?",
                        "Everything has beauty, but not everyone sees it.",
                        "The only true wisdom is in knowing you know nothing.",
                        "Let us put our minds together and see what life we can make for our children.",
                        "Let us never negotiate out of fear. But let us never fear to negotiate.",
                        "When something is important enough, you do it even if the odds are not in your favor.",
                        "So many books, so little time.",
                        "A room without books is like a body without a soul.",
                        "You only live once, but if you do it right, once is enough.",
                        "No one can make you feel inferior without your consent.",
                        "If you tell the truth, you don't have to remember anything.",
                        "Always forgive your enemies; nothing annoys them so much.",
                        "To live is the rarest thing in the world. Most people exist, that is all.",
                        "Without music, life would be a mistake.",
                        "We accept the love we think we deserve.",
                        "It is better to be hated for what you are than to be loved for what you are not.",
                        "It does not do to dwell on dreams and forget to live.",
                        "The fool doth think he is wise, but the wise man knows himself to be a fool.",
                        "We are all in the gutter, but some of us are looking at the stars.",
                        "I have not failed. I've just found 10,000 ways that won't work.",
                        "If you don't stand for something you will fall for anything.",
                        "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
                        " Knowledge is limited. Imagination encircles the world.",
                        "A day without sunshine is like, you know, night.",
                        "Love all, trust a few, do wrong to none.",
                        "What you spend years building may be destroyed overnight. Build anyway.",
                        "If you judge people, you have no time to love them.",
                        "It is never too late to be what you might have been.",
                        "I love deadlines. I love the whooshing noise they make as they go by.",
                        "My thoughts are stars I cannot fathom into constellations.",
                        "If you can't explain it to a six year old, you don't understand it yourself.",
                        "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
                        "There is no greater agony than bearing an untold story inside you.",
                        "Everything you can imagine is real.",
                        "We don't see things as they are, we see them as we are.",
                        "All you need is love. But a little chocolate now and then doesn't hurt.",
                        "Never trust anyone who has not brought a book with them.",
                        "You can never get a cup of tea large enough or a book long enough to suit me."];

// return and splice method to show different quotes
        return savyQuotes.splice(Math.floor(Math.random() * (savyQuotes.length)), 1);

    } else {
        alert("Select a category, please ;)");
    }

}

// DOM interaction

// select form

let form = document.querySelector("#form");

// event listener on submit and prevent form submission
form.addEventListener("submit",function(e){
    e.preventDefault();
    content.innerHTML="";

    // select radio button
    let radioButton = document.querySelector("input[type=radio]:checked");

    // select option cities/colours
    let list = document.getElementById("list");

    /* if statement for radio buttons, number of quotes value, category cities/colours selected */
    if (radioButton) {
        radioButton = parseInt(radioButton.value);
        list = parseInt(list.options[list.selectedIndex].value);

    // for loop to generate quotes, call function, create and append new element
        for (i = 0; i < radioButton; i++) {
            let sentence = quoteGenerator(list);
            let newElement = document.createElement("p");
            newElement.innerHTML = "\"" + sentence + "\"";
            content.appendChild(newElement);
        }
    }
},false);


    <!-- Hide Version One -->
    function hideVersionOne() {
        document.getElementById('quoteDisplay').innerHTML = null;
        }

