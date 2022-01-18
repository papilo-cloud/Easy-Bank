
var header = document.getElementById('header')
var hmbgr = document.getElementById('hmbgr')
var navMenu = document.getElementById('navMenu')
var hmbgr = document.getElementById('hmbgr')
var bdyCol = document.getElementById('bdyCol')
var scrollT = document.getElementById('scrollT')
var li = document.querySelectorAll('li')


//CODE TO SLIDE IN AND OUT THE FIXED HEADER ON SCROLL...
var prevPos = window.pageYOffset
window.onscroll = function () {
    var currentPos = window.pageYOffset;

    if (prevPos > currentPos) {
        header.style.top = '0'
    } else {
        header.style.top = '-100px'
    }
    prevPos = currentPos;

    //CODE TO SCROLL BACK TO TOP
    if (document.documentElement.scrollTop > 40){
        scrollT.style.display = 'block'
    } else{
        scrollT.style.display = 'none'
    }
}

// CODE TO TOGGLE BETWEEN SHOWING AND HIDING THE MENU

hmbgr.addEventListener('click', function () {
    navMenu.classList.toggle('show')
    hmbgr.classList.toggle('close')
    bdyCol.classList.toggle('close')
    
})

for (let i = 0; i < li.length; i++) {
    li[i].onclick = function () {
        navMenu.classList.remove('show')
        hmbgr.classList.toggle('close')
        bdyCol.classList.toggle('close')
    }
    
}

scrollT.addEventListener('click', function () {
    document.documentElement.scrollTop = 0
})





