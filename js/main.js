import { albums } from "./data.js";

console.log(albums);
const list = document.querySelector("#list");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
const loading = document.querySelector("#loading");

const CHEAP = ["ring-2", "ring-emerald-500"];

function createCard(album) {
    const card = document.createElement("article");
    
    card.className = "rounded-lg bg-white p-4 shadow"
    card.dataset.id = album.id;

    const image = document.createElement("img");
    image.src = album.image;
    image.alt = album.name;
    image.className = "mb-3 w-full rounded";

    const name = document.createElement("h2");
    name.className = "font-semibold";
    name.textContent = album.name;

    const price = document.createElement("p");
    price.textContent = `${album.price} EUR`;

    const link = document.createElement("a");
    link.href = album.url;
    link.className = "text-blue-700 underline";
    link.textContent = "Više o jelu";

    card.append(image, name, price, link);

    if (album.price < 3) {
        card.classList.add(...CHEAP);
    }

    return card;
}

function render(items) {
    list.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (const item of items) {
        fragment.append(createCard(item));
        }
        list.append(fragment);

        count.textContent = `Prikazana jela: ${items.length}`;

        empty.classList.toggle("hidden", items.length > 0);
    
}

const mains = albums
      .filter(album => album.category === "glavno jelo")
      .sort((a, b) => a.name.localeCompare(b.name));

render(mains);

loading.remove