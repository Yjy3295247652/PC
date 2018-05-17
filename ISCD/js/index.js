window.onload = function () {
    let close = document.getElementById('close');
    let onLine = document.getElementById('onLine');
    let information = document.getElementById('information');

    information.onclick = function () {
        information.style.display = 'none';
        onLine.style.display = 'block';
    }
    close.onclick = function () {
        information.style.display = 'block';
        onLine.style.display = 'none';
    }

    let bannerPic = document.querySelector('div.bannerPic')
    let dot = document.querySelectorAll('.dotBox > .dot');
    let pic = document.querySelectorAll('.bannerPic > .pic');
    let left = document.querySelector('.bannerPic > .left');
    let right = document.querySelector('.bannerPic > .right');
    let index = 0;
    // console.log(lefts);

    for (let i=0;i<dot.length;i++){
        dot[i].onclick = function (){
            for (let j = 0; j < dot.length; j++) {
                dot[j].className = 'dot';
                pic[j].style.display = 'none';
            }
            dot[i].className = 'dot hot';
            pic[i].style.display = 'block';
            index = i;
        }
    }
    let d = setInterval(move,2000);
    bannerPic.onmouseenter = function () {
        clearInterval(d);
    };
    bannerPic.onmouseleave = function () {
        d = setInterval(move,2000)
    };
    left.onclick = function () {
        moveL();
    };
    right.onclick = function () {
        move();
    }


    function move() {
        index++;
        if (index === pic.length){
            index = 0;
        }
        for(let i=0;i<pic.length;i++){
            pic[i].style.display = 'none';
            dot[i].className = 'dot';
        }
        pic[index].style.display = 'block';
        dot[index].className = 'dot hot';
    }

    function moveL() {
        index--;
        if(index < 0){
            index =pic.length - 1;
        }
        for(let i=0;i<pic.length;i++){
            pic[i].style.display = 'none';
            dot[i].className = 'dot';
        }
        pic[index].style.display = 'block';
        dot[index].className = 'dot hot';
    }



}