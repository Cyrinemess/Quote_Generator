const newQuoteButton = document.getElementById("new-quote");

async function getQuote() {

    const response = await(await fetch('https://api.quotable.io/random')).json();
    const quoteText =document.getElementById("text")
    const quoteAuthor =document.getElementById("author")
    const quotetweet =document.getElementById("tweet-quote")
    const quotetumblr =document.getElementById("tumblr-quote")
    const faquote =document.getElementsByClassName("fa-quote-left")[0]
    // object destructuring
    const {content, author} = response;
    /* const content= response.content
       const author= response.author
    */
    //quoteText.textContent = content ;
    //quoteAuthor.textContent= author;
    const color = `rgb(
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)} )`;
    document.body.style.backgroundColor  = color;  
    newQuoteButton.style.backgroundColor = color;
    quoteText.style.color= color;
    quoteAuthor.style.color= color;
    quotetweet.style.backgroundColor=color;
    quotetumblr.style.backgroundColor=color;
    faquote.style.color=color;
    quoteText.style.opacity=0;
    quoteAuthor.style.opacity=0;

    	// href change for sharing the quote to twitter or tumblr
	document.getElementById(
		"tweet-quote"
	).href = `https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${encodeURIComponent(
		content
	)}"${encodeURIComponent(" " + author)}`;
	document.getElementById(
		"tumblr-quote"
	).href = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
		author
	)}&content=${encodeURIComponent(
		content
	)}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
	// });

    setTimeout(function(){
        quoteText.style.opacity=1;
        quoteAuthor.style.opacity=1;
        quoteText.textContent = content ;
        quoteAuthor.textContent= author;
    }, 400);
}

getQuote();
newQuoteButton.addEventListener("click", getQuote);

