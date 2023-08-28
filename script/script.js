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
