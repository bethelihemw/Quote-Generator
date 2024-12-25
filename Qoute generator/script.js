let btn  = document.querySelector('.new');
let person = document.querySelector('.person');
let quote = document.querySelector('.quote');


const quotes = [{
    quote:'“We cannot solve problems with the kind of thinking we employed when we came up with them.”',
    person: 'Albert Einstein'
},{
    quote:'“Learn as if you will live forever, live like you will die tomorrow.” ',
    person: 'Mahatma Gandhi'
},{
    quote:'“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.”',
    person:'Mark Twain'
},{
    quote: '“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” ',
    person:'Winston Churchill'
},];


btn.addEventListener("click",function(){
    let random = Math.floor(Math.random()* quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
