import toggle_class from '../modules/toggle_class.js';
import slider from '../modules/slider.js';

// burger and popup
toggle_class('nav__burger', 'burger__sidebar', 'sidebar_active', 'burger-bg', 1, 0);
toggle_class('card', 'popup', 'active', 'popup__container', 0, 1);

// slider
let screen=document.body.clientWidth;
if (screen>=1280){
    slider(3);
}
if (screen<1280 && screen>=768){
    slider(2);
}
if (screen<768){
    slider(1);
}
