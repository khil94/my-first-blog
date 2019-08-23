const IMG_NUMBER = 4;
const body = document.querySelector('body');


function paintImage(imgNumber){
    const img = new Image();
    img.src = `./src/${imgNumber+1}.jpg`;
    img.classList.add('bgImage');
    body.prepend(img);
    
}

const genRandom = function(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

const init = function(){
    paintImage(genRandom());
}


init();