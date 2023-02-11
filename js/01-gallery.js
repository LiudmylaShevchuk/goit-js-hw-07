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
};

document.querySelector('gallery__link').onClick = () => {
    basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600"> `)
        .show();
}

//     const instance = basicLightbox
//         .create(`<img src="${evt.target.dataset.source}
//     "width="800" height="600">`,
//             onShow: (instance) => {
//                 window.addEventListener("keydown", onShowModal);
//             },
//             onClose: (instance) => {
//                 window.removeEventListener("keydown", onCloseModal);
//             }
//         )
//     instance.show();


const onCloseModal = (evt) => {
    const ESC_KEY = "Escape";
    if (evt.code === ESC_KEY) {
        instance.close();
    }
};




// };





//     });
// }

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show();



//     }




// const lightbox = (evt) => {
//     const ESC_KEY = "Escape";
//     if (evt.code === ESC_KEY) {
//         instance.close();
//     }
// };

// const instance = basicLightbox.create(`
//     <img src="${evt.target.dataset.source}" width="800" height="600">`
// ),




//         onclose (instance) => {
//             window.addEventListener("keydown", onCloseModal);
//         },
//             onshow(instance) => {
//         window.removeEventListener("keydown", onCloseModal);

//     },

//     instance.show()





