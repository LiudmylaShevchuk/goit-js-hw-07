import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery')

const galleryMarcup = createGalleryItemsMarcup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarcup);

galleryEl.addEventListener('click', onGalleryItemClick);

function createGalleryItemsMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <div class= "gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        width = "340"></img>
                </a>
</div>
            `
    })
        .join("")

};

function onGalleryItemClick(evt) {

    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}"
        width="800" height="600"/>`,
        {
            onShow: () => document.addEventListener("keydown", onCloseModal),
            onClose: () => document.removeEventListener("keydown", onCloseModal),
        }
    );
    instance.show();

    function onCloseModal(evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    }
}








