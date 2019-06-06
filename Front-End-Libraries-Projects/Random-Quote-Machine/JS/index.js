
$(document).ready(function() {
  $("#text").html(chooseQuote ());
  $("#author").html(chooseAuthor ());
  
   $("#new-quote").on("click", function(){ 
     $("#text").html(chooseQuote ());
     $("#author").html(chooseAuthor ());
     
   });
   $("#tweet-quote").click(function(){
   $("#tweet-quote").attr('href', 'https://twitter.com/intent/tweet?text=' + chooseQuote () +" "+ chooseAuthor ());
}); 
});  

var quotes = [
  { quote: "Harry, I'm going to let you in on a little secret. Every day, once a day, give yourself a present. Don't plan it. Don't wait for it. Just let it happen. It could be a new shirt at the men's store, a catnap in your office chair, or two cups of good, hot black coffee.", author: "Dale Cooper"},
  { quote: "Damn good coffee! And hot!", author: "Dale Cooper"}, 
  { quote: "In the grand design, women were drawn from a different set of blueprints.", author: "Dale Cooper"},
  { quote: "Jelly donuts?", author:"Sheriff Truman"},
  { quote: "Harry, that goes without saying.", author: "Dale Cooper"}, 
  { quote: "Cooper, you remind me today of a small Mexican chi-wow-wow.", author: "Gordon Cole"},
  { quote: "Diane, 7:30 am, February twenty-fourth. Entering town of Twin Peaks.", author: "Dale Cooper"},
  { quote: "Fellas, don't drink that coffee! You'd never guess. There was a fish in the percolator! Sorry.", author: "Pete Martell"},
  { quote: "Sheriff, what kind of fantastic trees have you got growing around here? Big, majestic.", author: "Dale Cooper"},
  { quote: "Harry, you're all right.", author: "Dale Cooper"},
  { quote: "Black as midnight on a moonless night.", author: "Dale Cooper of his coffee"},
  { quote: "You know, this is - excuse me - a damn fine cup of coffee. I've had I can't tell you how many cups of coffee in my life and this, this is one of the best. Now I'd like two eggs over hard. I know, don't tell me, it's hard on the arteries, but old habits die hard, just about as hard as I want those eggs.", author: "Dale Cooper"}
];

function chooseRanQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function chooseQuote() {
  return chooseRanQuote().quote;
}

function chooseAuthor() {
  return chooseRanQuote().author;
}