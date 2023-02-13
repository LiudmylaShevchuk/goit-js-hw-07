import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryEl = galleryItems
    .map(
        (item) =>
            `
            <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
            </a>
        `
    )
    .join("");

gallery.insertAdjacentHTML("beforeend", galleryEl);

const lightbox = new SimpleLightbox(".gallery a", {
    captionData: "alt",
    captionDelay: 250,
});
