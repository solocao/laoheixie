'use strict';

Vue.component('the-header', {
    props: ['title'],
    template: '<header id="header" class="header header-container clearfix">\n    <div class="container-fluid clearfix container-width-93" id="site-header-inner">\n        <div id="logo" class="logo float-left">\n            <a href="index.html" title="logo">\n                <img src="images/logo.png" alt="image" width="107" height="24" data-retina="images/logo@2x.png" data-width="107" data-height="24">\n            </a>\n        </div>\n        <!-- /.logo -->\n        <div class="mobile-button">\n            <span></span>\n        </div>\n        <ul class="menu-extra">\n            <li class="box-search">\n                <a class="icon_search header-search-icon" href="#"></a>\n                <form role="search" method="get" class="header-search-form" action="#">\n                    <input type="text" value="" name="s" class="header-search-field" placeholder="Search...">\n                    <button type="submit" class="header-search-submit" title="Search">Search</button>\n                </form>\n            </li>\n            <li class="box-login">\n                <a class="icon_login" href="#"></a>\n            </li>\n            <li class="box-cart nav-top-cart-wrapper">\n                <a class="icon_cart nav-cart-trigger active" href="#">\n                    <span>3</span>\n                </a>\n                <div class="nav-shop-cart">\n                    <div class="widget_shopping_cart_content">\n                        <div class="woocommerce-min-cart-wrap">\n                            <ul class="woocommerce-mini-cart cart_list product_list_widget ">\n                                <li class="woocommerce-mini-cart-item mini_cart_item">\n                                    <span>No Items in Shopping Cart</span>\n                                </li>\n                            </ul>\n                        </div>\n                        <!-- /.widget_shopping_cart_content -->\n                    </div>\n                </div>\n                <!-- /.nav-shop-cart -->\n            </li>\n        </ul>\n        <!-- /.menu-extra -->\n        <div class="nav-wrap">\n        <nav id="mainnav" class="mainnav">\n        <ul class="menu">\n            <li :class="{ active: title==\'home\'}">\n                <a href="index.html">HOME</a>\n            </li>\n            <li :class="{ active: title==\'shop\'}">\n                <a href="shop.html">SHOP</a>\n            </li>\n            <li :class="{ active: title==\'faq\'}">\n                <a href="faqs.html">FAQ</a>\n            </li>\n            <li :class="{ active: title==\'contact\'}">\n                <a href="contact.html">CONTACT</a>\n            </li>\n        </ul>\n    </nav>\n        </div>\n        <!-- /.nav-wrap -->\n    </div>\n    <!-- /.container-fluid -->\n</header>',
    data: function data() {
        return {
            message: 'Hello Vue!'
        };
    }
});

var app = new Vue({
    el: '#the-header',
    data: {
        message: 'Hello Vue!'
    }
});

require.config({
    baseUrl: "/js/",
    paths: {
        "store": "store"
    }
});

require(["store"], function (store) {
    Vue.use(store.store);
});
