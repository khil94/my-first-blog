// const IMG_NUMBER = 4;
var body = document.querySelector('body');


function paintImage(){
    const img = new Image();
    img.src = `./src/4.jpg`;
    img.classList.add('bgImage');
    body.prepend(img);
    
}

// function genRandom(){
//     const number = Math.floor(Math.random()*IMG_NUMBER);
//     return number;
// }

function init(){
    paintImage();
}


init();