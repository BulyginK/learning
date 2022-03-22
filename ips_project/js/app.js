function js() {
    // появление лого
    const preview = document.querySelector('#preview')

    setTimeout(function () {
        preview.remove();
    }, 1200);

    // работа кнопки hamburger
    document.addEventListener('click', function (event) {
        let id = event.target.dataset.mobileMenu;
        if (!id) return;

        let elem = document.getElementById('mobile-menu');

        elem.hidden = !elem.hidden;
    })

    // работа кнопки поиска по сайту
    document.addEventListener('click', function (event) {
        let id = event.target.dataset.menuSearch;
        if (!id) return;

        let elem = document.getElementById('search');

        elem.hidden = !elem.hidden;
    })

    // СКРИПТ ДЛЯ МОБИЛЬНОГО  МЕНЮ
    document.addEventListener('click', function (event) {
        let id = event.target.dataset.menuButton1;
        if (!id) return;

        let elem = document.getElementById('level-link1');

        elem.hidden = !elem.hidden;
    })

    document.addEventListener('click', function (event) {
        let id = event.target.dataset.menuButton2;
        if (!id) return;

        let elem = document.getElementById('level-link2');

        elem.hidden = !elem.hidden;
    })

    document.addEventListener('click', function (event) {
        let id = event.target.dataset.menuButton3;
        if (!id) return;

        let elem = document.getElementById('level-link3');

        elem.hidden = !elem.hidden;
    })

    document.addEventListener('click', function (event) {
        let id = event.target.dataset.menuButton4;
        if (!id) return;

        let elem = document.getElementById('level-link4');

        elem.hidden = !elem.hidden;
    })

    document.addEventListener('click', function (event) {
        let id = event.target.dataset.menuButton5;
        if (!id) return;

        let elem = document.getElementById('level-link5');

        elem.hidden = !elem.hidden;
    })

    // работа слайдера

    const width = 1140;
    const count = 1;

    const carousel = document.getElementById('slider')

    const list = carousel.querySelector('ul')
    const listItemCount = carousel.querySelectorAll('li').length;

    let position = 0;

    const prev = carousel.querySelector('.prev')
    prev.addEventListener('click', () => {
        position += width + count;
        position = Math.min(position, 0)
        list.style.marginLeft = position + 'px'
    })

    const next = carousel.querySelector('.next')
    next.addEventListener('click', () => {
        position -= width + count;
        position = Math.max(position, -width * (listItemCount - count));
        list.style.marginLeft = position + 'px'
    })
}

window.onload = js