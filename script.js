
//FETCHING AND SORTING

fetch("actors.json")
    .then(res => res.json())
    .then(handleData);

function handleData(actors) {
    console.log(actors)
    actors.forEach(displayActor);
}

function displayActor(actor) {
    console.log(actor)

    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("#actor").textContent = actor.fullname;
    copy.querySelector("#movie").textContent = actor.movie;

    document.querySelector("body").appendChild(copy)
}

//CLICK EVENT

const MOVIE = document.querySelector("#movie");
const BUTTON = document.querySelector("#actor");

MOVIE.classList.add(".hide");

function reveal(e) {
    MOVIE.classList.toggle(".hide");
}

BUTTON.onclick = reveal;
