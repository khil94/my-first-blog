var navs = document.querySelector('.navItem');

function init(){
    const testItem = navs.querySelector('.profile');
    testItem.addEventListener('click',ajaxListener);
}


function ajaxListener(){
    fetch('./nav/profile.html').then(function(response){
        if(response.status != '404'){
            console.log(response);
        }else console.log('failed.');
    })
}

init();