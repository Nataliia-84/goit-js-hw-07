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

    // event.target.preventDefault()
    if (!event.target.classList.contains('gallery__image')) {
        return
    }
  const dataSource = event.target.dataset.source
  console.log(dataSource)
  const instance = basicLightbox.create(`
     <img src="${dataSource}" width="1280" height="auto">
`)

instance.show()
    
   
    
}
