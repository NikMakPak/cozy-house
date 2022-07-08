import toggle_class from './toggle_class.js';
import petData from '../json/petsData.json' assert { type: 'json' };

function slider(cardNum) {
    const BTN_LEFT = document.querySelectorAll("#btn-left");
    const BTN_RIGHT = document.querySelectorAll("#btn-right");
    const CAROUSEL = document.querySelector("#carousel");
    const ITEM_LEFT = document.querySelector("#item-left");
    const ITEM_RIGHT = document.querySelector("#item-right");
    let countStart=0;

    const moveLeft = () => {
        countStart-=cardNum;
        CAROUSEL.classList.add("transition-left");
        BTN_LEFT[0].removeEventListener("click", moveLeft);
        BTN_LEFT[1].removeEventListener("click", moveLeft);
        BTN_RIGHT[0].removeEventListener("click", moveRight);
        BTN_RIGHT[1].removeEventListener("click", moveRight);
    };

    const moveRight = () => {
        countStart+=cardNum;
        CAROUSEL.classList.add("transition-right");
        BTN_LEFT[0].removeEventListener("click", moveLeft);
        BTN_LEFT[1].removeEventListener("click", moveLeft);
        BTN_RIGHT[0].removeEventListener("click", moveRight);
        BTN_RIGHT[1].removeEventListener("click", moveRight);
    };

    BTN_LEFT[0].addEventListener("click", moveLeft);
    BTN_LEFT[1].addEventListener("click", moveLeft);
    BTN_RIGHT[0].addEventListener("click", moveRight);
    BTN_RIGHT[1].addEventListener("click", moveRight);

    CAROUSEL.addEventListener("animationend", (animationEvent) => {
        let changedItem;
        if (animationEvent.animationName === "move-left") {
            CAROUSEL.classList.remove("transition-left");
            changedItem = ITEM_LEFT;
            ITEM_RIGHT.innerHTML = document.querySelector("#item-active").innerHTML;
            document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
        } else {
            CAROUSEL.classList.remove("transition-right");
            changedItem = ITEM_RIGHT;
            ITEM_LEFT.innerHTML = document.querySelector("#item-active").innerHTML;
            document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
        }
        let DOMimgs = changedItem.querySelectorAll(".card img");
        let DOMnames = changedItem.querySelectorAll(".card h2");
        if (countStart==Math.abs(countStart)){
            for (let i = countStart; i < countStart+cardNum; i++) {
                DOMimgs[i%cardNum].src = "./"+petData[(i+(6-cardNum))%8].img.slice(6);
                DOMnames[i%cardNum].innerHTML = petData[(i+(6-cardNum)) % 8].name;
            }
        }else{
        for (let i = countStart+cardNum; i > countStart; i--) {
            console.log((8 - i)%8)
            DOMimgs[Math.abs(i)%cardNum].src = "./"+petData[((8 - i)+1)%8].img.slice(6);
            DOMnames[Math.abs(i)%cardNum].innerHTML = petData[((8 - i)+1)%8].name;
        }}

        BTN_LEFT[0].addEventListener("click", moveLeft);
        BTN_LEFT[1].addEventListener("click", moveLeft);
        BTN_RIGHT[0].addEventListener("click", moveRight);
        BTN_RIGHT[1].addEventListener("click", moveRight);
        toggle_class('card', 'popup', 'active', 'popup__container', 0, 1);
    })
}
export default slider;