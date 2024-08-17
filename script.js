document.addEventListener('mousemove', (e)=> {
    const circle = document.querySelector('.circle');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    console.log(mouseX);
    console.log(mouseY);

    circle.style.left = `${mouseX - circle.offsetWidth / 2}px`;
    circle.style.top = `${mouseY - circle.offsetHeight / 2}px`;
});
