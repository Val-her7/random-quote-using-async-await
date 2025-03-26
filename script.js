async function fetchApi() {
    try {
        let response = await fetch("https://thatsthespir.it/api");
        
        if(!response.ok) {
            throw new Error("An error occured while fetching the random citation...")
        }

        return await response.json();
        
    } catch (error) {
        console.log(error);
    }
}

function displayQuote(quote) {
    
    if(typeof(quote) === "undefined") {
        const QUOTE = document.getElementById("quote");
        QUOTE.innerHTML = "Sorry, we are having a problem with your random citation, please try again...";
    } else {
        const QUOTE = document.getElementById("quote");
        QUOTE.innerHTML = quote.quote;

        const AUTHOR = document.getElementById("author");
        AUTHOR.textContent = quote.author;

        const IMAGE = document.getElementById("image");
        IMAGE.src = quote.photo;
        IMAGE.alt = quote.author;

        const CITATIONS = document.getElementById("number-of-quotes");
        CITATIONS.textContent = quote.total_quotes;
    }
}

window.onload = async () => {
    let res = await fetchApi();
    displayQuote(res); 
}

document.getElementById("button").addEventListener("click", async function getRandomQuote() {
    let res = await fetchApi();
    displayQuote(res);  
})