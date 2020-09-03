var box = $('.slide');
var imgList = $('.slide>.imgbox>a', true);
var yuanDian = $('.slide>ul>li', true);
var left = $('.left');
var right = $('.right');
var num = 0; //储存索引

for (var i = 0; i < yuanDian.length; i++) {
    yuanDian[i].index = i;
    yuanDian[i].onclick = function() {
        num = this.index;
        moveall();
    }
}

right.onclick = function() {
    num++;
    if (num > 4) {
        num = 0;
    }
    moveall();
}
left.onclick = function() {
    num--;
    if (num < 0) {
        num = 3;
    }
    moveall();
}

function moveall() {
    for (var i = 0; i < yuanDian.length; i++) {
        yuanDian[i].className = '';
        imgList[i].style.display = 'none';
    }
    yuanDian[num].className = 'yuan';
    imgList[num].style.display = 'block';
}

var timer = window.setInterval(function() {
    right.onclick();
}, 2000);