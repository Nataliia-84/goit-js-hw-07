import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const listEl = document.querySelector('.gallery');
console.log(listEl)


const itemEl = createItemElements(galleryItems);

function createItemElements(galleryItems) {

    return galleryItems.map(({ preview, description, original }) => {
        return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`}).join('');

}
listEl.insertAdjacentHTML('beforeend', itemEl)

listEl.addEventListener('click',onListElClick)

function onListElClick(event) {
    event.target.preventDefault()
    if (!event.target.nodeName === 'A') {
        return
    }
    console.log(event.target)
console.log(event.target.dataset.source)
   
    
   
    
}
// const instance = basicLightbox.create(`
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
// `)
//     instance.show()