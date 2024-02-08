const outerBtn=document.querySelector('.outer-btn');
const innerBtn=document.querySelector('.inner-btn');
const sideBar= document.querySelector('.side-bar');
const gearIcon=document.querySelector('.side-bar .outer-btn svg');
const overlay=document.querySelector('.overlay');
outerBtn.onclick=()=>{
    sideBar.classList.toggle('hide-sidebar');
    gearIcon.classList.toggle('gear-ani');
    overlay.classList.toggle('hide-overlay');
}

innerBtn.onclick=()=>{
    sideBar.classList.add('hide-sidebar');
    gearIcon.classList.remove('gear-ani');
    overlay.classList.add('hide-overlay');
}
overlay.onclick=()=>{
    sideBar.classList.add('hide-sidebar');
    overlay.classList.add('hide-overlay');
}