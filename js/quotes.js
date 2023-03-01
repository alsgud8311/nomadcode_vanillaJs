const quotes = [{
    quote: "The truth is you don’t know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed.",
    rapper: "eminem",
},
{
    quote: "When I say or do something, I do it. I don’t give a damn what you think. I’m doing this for me.",
    rapper: "eminem",
},
{
    quote: "Everybody has goals, aspirations or whatever, and everybody has been at a point in their life where nobody believed in them.",
    rapper: "eminem",
},
{
    quote: "I just can’t sit back and wallow, in my own sorrow, but I know one fact: I’ll be one tough act to follow.",
    rapper: "eminem",
},
{
    quote: "I say what I want to say and do what I want to do. There’s no in between. People will either love you for it or hate you for it.",
    rapper: "eminem",
},
{
    quote: "Nobody likes to fail. I want to succeed in everything I do, which isn’t much. But the things that I’m really passionate about, if I fail at those, if I’m not successful, what do I have?",
    rapper: "eminem",
},
{
    quote: "I’m standing up, I’mma face my demons, I’m manning up, I’mma hold my ground.",
    rapper: "eminem",
},
{
    quote: "You don’t get another chance, life is no Nintendo game.",
    rapper: "eminem",
},
{
    quote: "Don’t ever try to judge me dude, you don’t know what the fuck I’ve been through.",
    rapper: "eminem",
},
{
    quote: "You’ve got enemies? Good, that means you actually stood up for something.",
    rapper: "eminem",
},
{
    quote: "Don’t let them say you ain’t beautiful. They can all get fucked, just stay true to you.",
    rapper: "eminem",
},]

const quote = document.querySelector("#quotes span:first-child");
const rapper = document.querySelector("#quotes span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
rapper.innerText = todaysQuote.rapper;


