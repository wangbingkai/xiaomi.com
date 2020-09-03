import $ from './library/jquery.js';

(function() {
    $.ajax({
        type: "get",
        url: "../../interface/getproduct1.php",
        dataType: "json",
        success: function(res) {
            let temp = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.pic);


                temp += ` <li class="item">
                    <a  href="./product-details.html?id=${elm.id}" target="__blank">
                        <p class="p-picture"><img src="..${picture[0].src}" alt=""></p>
                        <p class="p-title"> ${elm.title}</p>
                        <p class="p-syn">${elm.syn}</p>
                        <p class="p-price">${elm.price}元起</p>
                    </a>
                </li>`

            });
            // console.log(temp);
            $('.list1').append(temp);
        }
    });
})();