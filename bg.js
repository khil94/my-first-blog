const IMG_NUMBER = 4;
var body = document.querySelector('body');


function paintImage(imgNumber){
    const img = new Image();
    img.src = `./src/${imgNumber+1}.jpg`;
    img.classList.add('bgImage');
    body.prepend(img);
    
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    paintImage(genRandom());
}


init();