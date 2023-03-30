import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createItemEl() {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    }).join('');
}
const itemEl = createItemEl()
// console.log(itemEl)
const listEl = document.querySelector('.gallery')
// console.log(listEl)
listEl.insertAdjacentHTML('beforeend', itemEl)

listEl.addEventListener('click', onClickListEl)

function onClickListEl(event) {
    event.preventDefault()
    
    
    
};

let gallery = new SimpleLightbox('.gallery a', { sourceAttr: 'href' ,captionsData: 'alt', animationSpeed: 250});