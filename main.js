let img = document.querySelector('.iphone');
let container = document.querySelector('.container');
function phones(phone) {
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = phone;
        img.style.opacity = '1';
    }, 300);
}
function color(color) {
    if (color === '#c79b53') {
        container.style.background = '#000';
        container.style.backgroundImage = 'radial-gradient(circle at center, #333, #000)';
    } else if (color === '#1e1e1e') {
        container.style.background = '#2c2c2c';
        container.style.backgroundImage = 'radial-gradient(circle at center, #444, #2c2c2c)';
    } else {
        container.style.background = color;
        container.style.backgroundImage = `radial-gradient(circle at center, ${adjustColor(color, 20)}, ${color})`;
    }
}
function adjustColor(color, percent) {
    let R = parseInt(color.substring(1,3), 16);
    let G = parseInt(color.substring(3,5), 16);
    let B = parseInt(color.substring(5,7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    const RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

    return "#"+RR+GG+BB;
}
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});