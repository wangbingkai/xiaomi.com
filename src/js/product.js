import $ from './library/jquery.js';
import { cookie } from './library/cookie.js';

(function() {
    let id = location.search.split('=')[1]; // 获取id


    $.ajax({
        type: "get",
        url: "../../interface/getitem.php",
        data: {
            id: id
        },
        dataType: "json",
        success: function(res) {
            let template = '';
            res.forEach((elm, i) => {
                let picture = JSON.parse(elm.pic);

                template += `<h2>小米真无线蓝牙耳机 Air 2</h2>
                <p class="sale_desc">智能语音唤醒，解放双手 / 蓝牙5.0芯片，稳定无线连接 / 分体式真无线设计，无主从限制，单双耳灵活切换 / 双麦克风降噪，有效降低通话时环境噪音 / LHDC蓝牙解码高清音质 / 复合振膜动圈，还原声音细节</p>
                <p class="mi_title">小米自营</p>
                <div class="priceinfo">
                    <span>299 元<del>399元</del></span>
                </div>
                <div class="line"></div>
                <div class="addres_box">
                    <i class="iconfont icon-wangdian"></i>
                    <div class="addres_con">
                        <div>
                            <div style="float:left;">
                                <span>浙江</span>
                                <span>杭州市</span>
                                <span>江干区</span>
                                <span>杭海路</span>
                            </div>
                            <a href="" style="float:left;"> 修改 </a>
                        </div>
                        <br>
                        <p>有现货</p>
                    </div>
                </div>
                <div class="opction_box">
                    <div class="title">选择颜色</div>
                    <div class="item">白色</div>
                </div>
                <div class="selected">
                    <div>
                        小米真无线蓝牙耳机 Air 2 白色<span>299元 <del> 399元</del></span>
                    </div>
                    <p>总计：<span>299</span>元</p>
                </div>
                <div class="btn_box">
                    <div class="sale_btn">
                        <a href="">加入购物车</a>
                    </div>
                    <div class="favorite_btn">
                        <a href=""><i></i>喜欢</a>
                    </div>
                </div>
                <div class="sale_info">
                    <span>
                        <a href="">
                            <span class="iconfont icon-gou"></span><em>小米自营</em>
                    </a>
                    </span>
                    <span>
                        <a href="">
                            <span class="iconfont icon-gou"></span><em>小米发货</em>
                    </a>
                    </span>
                    <span>
                        <a href="">
                            <span class="iconfont icon-gou"></span><em>7天无理由退货</em>
                    </a>
                    </span>
                    <span>
                        <a href="">
                            <span class="iconfont icon-gou"></span><em>运费说明</em>
                    </a>
                    </span>
                    <span>
                        <a href="">
                            <span class="iconfont icon-gou"></span><em>企业信息</em>
                    </a>
                    </span>
                    <span>
                        <a href="">
                            <span class="iconfont icon-gou"></span><em>售后服务政策</em>
                    </a>
                    </span>
                    <span>
                        <a href="">
                            <span class="iconfont icon-gou"></span><em>7天价格保护</em>
                    </a>
                    </span>
                </div>`
            });

            $('.222').append(template);
        }
    });



    // function addItem(id, price, num) {
    //     let shop = cookie.get('shop'); // 从cookie中获取shop数据

    //     let product = {
    //         id: id,
    //         price: price,
    //         num: num
    //     };

    //     if (shop) { // 判断是否存有购物车数据
    //         shop = JSON.parse(shop);
    //         // 购物车中是否已经存在当前这件商品
    //         if (shop.some(elm => elm.id == id)) {
    //             // 修改数量
    //             shop.forEach(elm => {
    //                 elm.id === id ? elm.num = num : null;
    //             });
    //         } else {
    //             // 添加商品
    //             shop.push(product);
    //         }

    //     } else {
    //         shop = [];
    //         shop.push(product);
    //     }

    //     cookie.set('shop', JSON.stringify(shop), 1);
    // }
})();