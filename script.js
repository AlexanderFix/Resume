

stepik.addEventListener('click' , (e) => {
    fullscreenContainer.style.display = 'flex';
    fullscreenImage.src = `./img/stepik.png`;
    body.classList.add('lock')

})
belhard.addEventListener('click' , (e) => {
    fullscreenContainer.style.display = 'flex';
    fullscreenImage.src = `./img/belhard.png`;
    body.classList.add('lock')

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