const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click', () => {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    h1.textContent = `rgb(${r},${g},${b})`;
    btn.style.color = `rgb(${r},${g},${b})`;
    if(r+g+b < 300) {
        h1.style.color = 'white'
    } else {
        h1.style.color = 'black'
    }
})