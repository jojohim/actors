const MOVIE = document.querySelector(".movie");
const BUTTON = document.querySelector(".actor");

//FETCHING AND SORTING

fetch("actors.json")
    .then(res => res.json())
    .then(handleData);

function handleData(actors) {
    console.log(actors)
    actors.forEach(displayActor);
    actorClick();
}

function actorClick() {
 document.querySelectorAll(".actor").forEach((actor) => {
 actor.addEventListener("click", (e) => {
 console.log(e.target);
 e.target.parentNode.querySelector(".movie").classList.toggle("hide");
 });
 });
}

function displayActor(actor) {
    console.log(actor)

    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector(".actor").textContent = actor.fullname;
    copy.querySelector(".movie").textContent = actor.movie;

    document.querySelector("body").appendChild(copy)
}

//CLICK EVENT


//MOVIE.classList.add(".hide");

function reveal(e) {
  MOVIE.classList.toggle(".hide");
}

//BUTTON.onclick = reveal;
