var navs = document.querySelector('.navItem');

function init(){
    const testItem = navs.querySelector('.profile');
    testItem.addEventListener('click',ajaxListener);
}


function ajaxListener(){
    fetch('./nav/profile.html').then(function(response){
        console.log(response);
    })
}

init();