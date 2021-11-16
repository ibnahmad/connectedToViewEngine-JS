

setTimeout(() => {
    
changeBodyBg("cornflowerblue")
}, 3000);


setTimeout(() => {
    changeBodyBg("royalblue")
}, 6000);

setTimeout(() => {
    changeBodyBg("rebeccapurple")
}, 15000);



function changeBodyBg(color){
    document.body.style.background = color;
}