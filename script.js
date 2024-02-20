

stepik.addEventListener('click' , (e) => {
    fullscreenContainer.style.display = 'flex';
    fullscreenImage.src = `./img/stepik.png`;
    body.classList.add('lock')
console.log(e);
})
belhard.addEventListener('click' , (e) => {
    fullscreenContainer.style.display = 'flex';
    fullscreenImage.src = `./img/belhard.png`;
    body.classList.add('lock')
console.log(e);
})


fullscreenContainer.addEventListener('click', (e) => {
    if (e.target == fullscreenContainer) {
        fullscreenContainer.style.display = 'none';
        body.classList.remove('lock')
    }
});
closeImg.addEventListener('click', () => {
    fullscreenContainer.style.display = 'none';
    body.classList.remove('lock')
})