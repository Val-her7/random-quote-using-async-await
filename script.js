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

