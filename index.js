let message = document.querySelector("#message");

let addMovie = (event) => {
    event.preventDefault()
    
    let inputField = document.querySelector("input"); 
    let movie = document.createElement("li");
    let movieTitle = document.createElement("span");
    
    movieTitle.textContent = inputField.value;

    movieTitle.addEventListener("click", crossOffMovie);

    movie.appendChild(movieTitle);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);

    document.querySelector("ul").appendChild(movie);

    inputField.value = ""
}

document.querySelector("form").addEventListener("submit", addMovie);

let revealMessage = () => {
    message.classList.remove("hide")
    setTimeout(() => {
        message.classList.add("hide")
    }, 1000);
}

let deleteMovie = (event) => {
    message.textContent = event.target.previousSibling.textContent + " Deleted!";
    revealMessage();
    return event.target.parentNode.remove();
}

let crossOffMovie = (event) => {
    event.target.classList.toggle("checked")

    if(event.target.classList.contains("checked") === true) {
        message.textContent = event.target.textContent + " watched!"
    } else {
        message.textContent = event.target.textContent + " added back!"
    }
    revealMessage();
}

