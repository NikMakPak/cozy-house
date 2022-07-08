const toggle_class = (_whoListen, _whomAddClass, _addClassName, _bgr_ClickToClose) => {
    const whoListen = document.querySelector(`${'.'+_whoListen}`);
    const whomAddClass = document.querySelector(`${'.'+_whomAddClass}`);
    const bgr_ClickToClose = document.querySelector(`${'.'+_bgr_ClickToClose}`);
    const links = Array.from(document.querySelector('#menu').children);
    const body = document.querySelector("body");
    const logo = document.querySelector(".logo");

    whoListen.addEventListener("click", addClass);

    function addClass(e) {
        e.preventDefault();
        whomAddClass.classList.toggle(`${_addClassName}`);
        bgr_ClickToClose.classList.toggle(`${_addClassName}`);
        body.classList.toggle("noscroll");
        // отключить при необходимости
        whoListen.classList.toggle("burger_rotate");
        logo.classList.toggle("logo_hide");
    }

    // закрытие по нажатию на бэкграунд
    bgr_ClickToClose.addEventListener("click", closeOnClick);

    // закрытие ссылок
    // отключить при необходимости
    links.forEach((link) => {
        link.addEventListener("click", closeOnClick);
    });

    function closeOnClick() {
        whomAddClass.classList.remove(`${_addClassName}`);
        bgr_ClickToClose.classList.remove(`${_addClassName}`);
        body.classList.remove("noscroll");
        // отключить при необходимости
        whoListen.classList.remove("burger_rotate");
        logo.classList.remove("logo_hide");
    }


}


toggle_class('nav__burger', 'burger__sidebar', 'sidebar_active', 'burger-bg');