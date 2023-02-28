const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
    console.log("title was clicked");    
    title.style.color = "blue";
}
function HandleMouseEnter(){
   title.innerText = "mouse is here";
}
function HandleMouseLeave(){
    title.innerText = "mouse is gone";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter",HandleMouseEnter);
title.addEventListener("mouseleave",HandleMouseLeave);