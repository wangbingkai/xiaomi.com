//1.获取随机区间数
function ranNum(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

//2.封装函数实现获取任意的css样式
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}

//3.获取元素对象。
function $(selector, all) {
    if (!all) {
        return document.querySelector(selector); //单个
    } else {
        return document.querySelectorAll(selector) //多个
    }
}

//4.缓冲运动
function bufferMove(obj, json, fn) {
    var speed = null;
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true;
        for (var attr in json) {
            var currentvalue = null;
            if (attr === 'opacity') {
                currentvalue = Math.round(getStyle(obj, attr) * 100);
            } else {
                currentvalue = parseInt(getStyle(obj, attr)); //带单位的
            }
            speed = (json[attr] - currentvalue) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (currentvalue !== json[attr]) {
                if (attr === 'opacity') {
                    obj.style.opacity = (currentvalue + speed) / 100;
                    obj.style.filter = 'alpha(opacity = ' + (currentvalue + speed) + ')';
                } else {
                    obj.style[attr] = currentvalue + speed + 'px';
                }
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            fn && fn();
        }
    }, 1000 / 60);
};