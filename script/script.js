// ---------- Подключение яндекс-карт -----------//
function init() {
    let myMap = new ymaps.Map("map", {
        center: [56.841248691452755,60.59780669291867],
        zoom: 16 
    })

 let myPlacemark = new ymaps.Placemark([56.84128073150723,60.59787807040558], {}, {
     iconLayout: 'default#image',
      iconImageHref: '/img/Map_PIN.png',
      icon_imagesize: [40, 40],
      iconImageOffset: [-3, -42]
   });
myMap.geoObjects.add(myPlacemark);
}

ymaps.ready(init);


// --------- Галерея комментариев ---------------//

const rightButtons = document.querySelectorAll('.btn-right');       
const leftButtons = document.querySelectorAll('.btn-left'); 
let i = 0;

[...rightButtons].forEach(rightButton => {
rightButton.onclick = () => {  
    const itemCollection = Array.from(rightButton.parentElement.querySelectorAll('.comment-item'));    
    console.log(itemCollection);
    if (i+1 === itemCollection.length){
        i = -1;
        itemCollection[itemCollection.length - 1].classList.remove("item-active");
    } 
    i++;
 removeRight(itemCollection)
}});

[...leftButtons].forEach(leftButton => {
leftButton.onclick = () => {
    const itemCollection = Array.from(leftButton.parentElement.querySelectorAll('.comment-item')); 
    if (i === 0){
        i = itemCollection.length;
        itemCollection[0].classList.remove("item-active");
    } 
    i--;
    removeLeft(itemCollection)
}});

function removeRight(itemCollection) {    
    itemCollection[i].classList.add("item-active")
    if(i === 0) {
        itemCollection[itemCollection.length - 1].classList.remove("item-active")
    } else {
        itemCollection[i-1].classList.remove("item-active") 
    }       
}

function removeLeft(itemCollection) {   
    itemCollection[i].classList.add("item-active")
    if(i === itemCollection.length - 1) {
        itemCollection[0].classList.remove("item-active")  
    } else {
        itemCollection[i+1].classList.remove("item-active")
    }
          
}   
