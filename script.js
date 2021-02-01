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

    copy.querySelector("h2").textContent = actor.fullname;
    copy.querySelector("h3").textContent = actor.movie;

    document.querySelector("body").appendChild(copy)

}


