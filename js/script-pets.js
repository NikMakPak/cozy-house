import toggle_class from '../modules/toggle_class.js';
import petData from '../json/petsData.json' assert { type: 'json' };

// burger and popup
toggle_class('nav__burger', 'burger__sidebar', 'sidebar_active', 'burger-bg', 1, 0);
toggle_class('card', 'popup', 'active', 'popup__container', 0, 1);

//pagination
const CARDS=document.querySelectorAll('.slider__wrap .card');
const BTN_LEFT=document.querySelector('.btn_left');
const BTN_RIGHT=document.querySelector('.btn_right');
const BTN_HOME=document.querySelector('.btn_home');
const BTN_END=document.querySelector('.btn_end');
const PAGE_NUM=document.querySelector('.page-num');

const pagination = (max_num,countStart)=> {
    let active_num=1;
    
    function renderCards(){
        let countNum = countStart * (active_num-1);
        for (let i = countNum; i < (8 - (8-countStart))+countNum; i++) {
            let img=CARDS[i%(8 - (8-countStart))].querySelector('img');
            let name =CARDS[i%(8 - (8-countStart))].querySelector('h2');
            img.src=petData[i%8].img;
            name.innerHTML=petData[i%8].name;
        }
    }
    
    const addID = (btn) => {
        btn.id = "btn_not-active";
    }
    const removeID = (btn) => {
        btn.id = "";
    }
    const numChecker = (active_num) => {
        if (active_num > 1) {
            removeID(BTN_HOME);
            removeID(BTN_LEFT);
            removeID(BTN_RIGHT);
            removeID(BTN_END);
        }
        if (active_num == max_num) {
            addID(BTN_RIGHT);
            addID(BTN_END);
        }
        if (active_num == 1) {
            addID(BTN_LEFT);
            addID(BTN_HOME);
            removeID(BTN_RIGHT);
            removeID(BTN_END);
        }
    }
    
    const moveRight = (e) => {
        active_num++;
        renderCards();
        PAGE_NUM.innerHTML = active_num;
        numChecker(active_num);

    }
    const moveLeft = (e) => {
        active_num--;
        renderCards();
        PAGE_NUM.innerHTML = active_num;
        numChecker(active_num);

    }
    const moveEnd = (e) => {
        active_num = max_num;
        renderCards();
        PAGE_NUM.innerHTML = active_num;
        numChecker(active_num);
    }
    const moveHome = (e) => {
        active_num = 1;
        renderCards();
        PAGE_NUM.innerHTML = active_num;
        numChecker(active_num);
    }


    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
    BTN_HOME.addEventListener("click", moveHome);
    BTN_END.addEventListener("click", moveEnd);
}

let screen=document.body.clientWidth;
if (screen>=1280){
    pagination(6,0);
}
if (screen<1280 && screen>=768){
    pagination(8,6);
}
if (screen<768){
    pagination(16,3);
}

