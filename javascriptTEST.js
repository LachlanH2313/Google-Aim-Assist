// delcares custom cursors in conjuction with the CSS and HTML files
const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    // Update the custom cursor's position based on mouse coordinates
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});