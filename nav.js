var navs = document.querySelector('.navItems');

function init(){
    const testItem = navs.querySelector('.profile');
    testItem.addEventListener('click',leadToPage);
}


function leadToPage(e){
    var name = e.target.className;

    fetch(`/nav/${name}.html`)
    .then((res) =>{
        console.log(`/nav/${name}.html`);
        return res.text();
    })
    .then((data)=>{
        console.log(data);
        document.querySelector('.section').innerHTML = data;
    });
}

init();