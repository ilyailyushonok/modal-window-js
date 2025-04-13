const openBtn = document.querySelector('#openBtn');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeBtn');

const toggleBtnHandler = () => {
    modal.classList.toggle('open');
}

openBtn.addEventListener('click', () => {
    toggleBtnHandler()
})
closeBtn.addEventListener('click', () => {
    toggleBtnHandler()

})
window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        toggleBtnHandler()
    }
})
modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('open')) toggleBtnHandler()
})