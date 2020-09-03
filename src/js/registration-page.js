var phone = document.getElementById('phone');
var kong = document.getElementById('kong');
var btn = document.getElementById('btn');

var reg = /^1[3-9]\d{9}$/;
phone.onblur = function() {
    if (this.value == '') {
        kong.innerHTML = "手机号不能为空！";
    } else if (reg.test(phone.value)) {
        kong.innerHTML = "";
        phone.attr('data-pass', true)
    } else {
        kong.innerHTML = "手机号格式错误，请重新输入！";
    }
}