var navs = document.querySelector('.navItems');

function init(){
    for(var i=0; navs.childNodes[i]!=null ;i++){
        var child = navs.childNodes[i];
        if(child.hasChildNodes() && child.firstChild.tagName == 'A' ){
            child.firstChild.addEventListener('click',leadToPage);
        }
    }
    document.querySelector('.index').addEventListener('click',leadToIndex);
    refreshPage();
}


function leadToPage(e){
    var name = e.target.className;

    fetch(`/nav/${name}.html`)
    .then((res) =>{
        if( res.status!=200){
            return ;
        }else return res.text();
    })
    .then((data)=>{
        if(data!=undefined){
            document.querySelector('.section').innerHTML = data;
            console.log(data);
        }else console.log("Failed to move")
    });
}

function leadToIndex(e){
    var name = e.target.className;

    fetch(`index.html`)
    .then((res) =>{
        if( res.status!=200){
            return ;
        }else window.location.href = res.url;
    })
  
}

function refreshPage(){
    fetch('index.css').then((res)=>console.log(res));
}


init();