import getVal from '../modules/getValue.js';
import petData from '../json/petsData.json' assert { type: 'json' };

function toggle_class(_whoListen, _whomAddClass, _addClassName, _bgr_ClickToClose, _needRotate, _popup) {
    const whomAddClass = document.querySelector(`${'.'+_whomAddClass}`);
    const bgr_ClickToClose = document.querySelector(`${'.'+_bgr_ClickToClose}`);
    const links = Array.from(document.querySelector('#menu').children);
    const body = document.querySelector("body");
    const logo = document.querySelector(".logo");

    if (_popup == 1) {
        var whoListen = document.querySelectorAll(`${'.'+_whoListen}`)
        whoListen.forEach((btn) => {
            btn.addEventListener("click", () => {
                let petName = btn.querySelector('.card__name h2').innerHTML;
                let jsonPET = getVal(petData,petName);
                let popupImg = document.querySelector('.popup__body img');
                let popupContent = document.querySelector('.popup__content');
                let popupList = popupContent.querySelectorAll('.popup__info .item');
                if (document.title == "Cozy House - About"){
                    popupImg.src = "./"+jsonPET.img.slice(6);
                }else{
                    popupImg.src = jsonPET.img;
                }
                popupContent.querySelector('h2').innerHTML = jsonPET.name;
                popupContent.querySelector('.content__head p').innerHTML=jsonPET.type+" - "+jsonPET.breed;
                popupContent.querySelector('.content__main').innerHTML=jsonPET.description;
                popupList[0].querySelector('.item__info').innerHTML=jsonPET.age;
                popupList[1].querySelector('.item__info').innerHTML=jsonPET.inoculations;
                popupList[2].querySelector('.item__info').innerHTML=jsonPET.diseases;
                popupList[2].querySelector('.item__info').innerHTML=jsonPET.parasites;
                addClass();
            });
        });
    } else {
        whoListen = document.querySelector(`${'.'+_whoListen}`)
        whoListen.addEventListener("click", addClass);
    }

    function addClass() {
        whomAddClass.classList.toggle(`${_addClassName}`);
        bgr_ClickToClose.classList.toggle(`${_addClassName}`);
        body.classList.toggle("noscroll");
        if (_needRotate == 1) {
            whoListen.classList.toggle("burger_rotate");
        }
        logo.classList.toggle("logo_hide");
    }

    // закрытие по нажатию на бэкграунд
    bgr_ClickToClose.addEventListener("click", closeOnClick);

    links.forEach((link) => {
        link.addEventListener("click", closeOnClick);
    });

    function checkForClose(whoClick, parentClick){
        if (whoClick == 'popup__close-btn btn' || whoClick == parentClick || whoClick == ''){
            return true;
        }
        return false;
    }
    function closeOnClick() {
        // в функцию checkforclose передаю параметры:
        // event.target = самый глубокий элемент на который кликнула мышь
        // this = это самый верхний родитель (до него дошло всплытие функции addeventlistener)
        // подробнее тут https://learn.javascript.ru/event-bubbling#tselevoy-element-event-target
        if (checkForClose(event.target.className, this.className)) {
            whomAddClass.classList.remove(`${_addClassName}`);
            bgr_ClickToClose.classList.remove(`${_addClassName}`);
            body.classList.remove("noscroll");
            if (_needRotate == 1) {
                whoListen.classList.remove("burger_rotate");
            }
            logo.classList.remove("logo_hide");
        }
    }


}
export default toggle_class;