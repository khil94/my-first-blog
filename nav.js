var navs = document.querySelector('.navItem');

function init(){
    const testItem = navs.querySelector('.profile');
    testItem.addEventListener('click',leadToPage);
}


function leadToPage(e){
    var name = e.target.className;

    fetch(`./nav/${name}.html`).then(function(response){
        if(response.status != '404'){
            console.log(response.status);
        }else console.log('failed.');
    })
}

init();