"use strict"
let tabs = document.querySelectorAll('.tabs>.tab-header>p');
let tab_inner = document.querySelectorAll('.tabs-inner');
tabs.forEach(item => item.addEventListener("click", function (event) {
    tab_inner.forEach(item => item.classList.remove('active'));
    let classs = event.currentTarget.classList;
    document.querySelectorAll(`.${classs}`)[1].classList.add('active');
}));