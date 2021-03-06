export const cart = () => {
    const cartBtn = document.querySelector('.button-cart');
    const cart = document.getElementById('modal-cart');
    const closeBtn = cart.querySelector('.modal-close');
    const goodsContainer = document.querySelector('.long-goods-list')

    cartBtn.addEventListener('click', () => {
        cart.style.display = 'flex';
    })

    closeBtn.addEventListener('click', () => {
        cart.style.display = '';
    })

    if (goodsContainer) {
        goodsContainer.addEventListener('click', (event) => {
            console.log(event);
        })
    }
};