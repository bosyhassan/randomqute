const quotes=[
    {
        quote:'"A room without books is like a body without a soul."',
        writer:'― Marcus Tullius Cicero'
    },{
        quote:'"Be the change that you wish to see in the world."',
        writer:'― Mahatma Gandhi'
    },{
        quote:'"If you tell the truth, you dont have to remember anything."',
        writer:'― Mark Twain'
    },{
        quote:'"A friend is someone who knows all about you and still loves you."',
        writer:'― Elbert Hubbard'
    },{
        quote:'"Always forgive your enemies; nothing annoys them so much."',
        writer:'― Oscar Wilde'
    },{
        quote:'"Without music, life would be a mistake."',
        writer:'― Friedrich Nietzsche, Twilight of the Idols'
    },{
        quote:'"Insanity is doing the same thing, over and over again, but expecting different results."',
        writer:'― Narcotics Anonymous'
    },{
        quote:'"It is better to be hated for what you are than to be loved for what you are not."',
        writer:'― Andre Gide, Autumn Leaves'
    },{
        quote:'"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."',
        writer:'― Ralph Waldo Emerson'
    },{
        quote:'"So many books, so little time."',
        writer:'― Frank Zappa'
    },{
        quote:'"You have to look pretty if you want to sell pretty houses, sweetie."',
        writer:'― Lisa Gray, To Die For'
    }
]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random() *quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML =quotes[random].writer;

})
