import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery')

const galeryMarcup = createGalleryItemsMarcup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galeryMarcup);

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
                    />
                </a>
</div>
            `
    })
        .join("");

};

function onGalleryItemClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
    const lightbox = new simpleLightbox(".gallery__item", {
        captionDelay: 250,
        captionData: "alt",
    });


    // const lightbox = (evt) => {
    //     const ESC_KEY = "Escape";
    //     if (evt.code === ESC_KEY) {
    //         instance.close();
    //     }
    // };

    // const instance = basicLightbox.create(
    //     `
    //     `,
    //     {

    //     }
    // );
    // instance.show();

}

