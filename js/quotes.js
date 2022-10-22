const quoteList=[
{
    quote:"Ask, and it shall be given you; seek, and you shall find",
author:"the Bible",
},
{quote:"Ask not what your country can do for you; ask what you can do for your country",
    author:"John Kennedy",
},
{quote:"Eighty percent of success is showing up",
    author:"Woody Allen",
},
{quote:"Genius is one percent inspiration and ninety-nine percent perspiration",
    author:"Thomas Edison",
},
{quote:"Stay hungry. Stay foolish",
    author:"Steve Jobs",
},
{quote:"May the Force be with you",
    author:"Star Wars",
},
{quote:"Life's too short to hang out with people who aren't resourceful",
    author:"Jeff Bezos",
},
{quote:"Innovation distinguishes between a leader and a follower",
    author:"Steve Jobs",
},
{quote:"A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well",
    author:"Jeff Bezos",
},
{quote:"When something is important enough, you do it even if the odds are not in your favor",
    author:"Elon Musk",
},
{quote:"It's OK to have your eggs in one basket as long as you control what happens to that basket",
    author:"Elon Musk",
},
{quote:"When Henry Ford made cheap, reliable cars, people said, 'Nah, what's wrong with a horse?' That was a huge bet he made, and it worked",
    author:"Elon Musk",
},

];


const quote =document.querySelector("#quote h3:first-child");
const author =document.querySelector("#quote h3:last-child");
const randomList = Math.floor(Math.random()*quoteList.length);
const todayQuote = quoteList[randomList];


quote.innerText= todayQuote.quote;
author.innerText= todayQuote.author;

