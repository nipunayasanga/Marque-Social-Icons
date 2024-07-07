document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseover', () => {
        document.querySelector('.carousel').style.animationPlayState = 'paused';
    });
    item.addEventListener('mouseout', () => {
        document.querySelector('.carousel').style.animationPlayState = 'running';
    });
});
