

Vue.component('the-header', {
    props: ['title'],
    template: `<header id="header" class="header header-container clearfix">
    <div class="container-fluid clearfix container-width-93" id="site-header-inner">
        <div id="logo" class="logo float-left">
            <a href="index.html" title="logo">
                <img src="images/logo.png" alt="image" width="107" height="24" data-retina="images/logo@2x.png" data-width="107" data-height="24">
            </a>
        </div>
        <!-- /.logo -->
        <div class="mobile-button">
            <span></span>
        </div>
        <ul class="menu-extra">
            <li class="box-search">
                <a class="icon_search header-search-icon" href="#"></a>
                <form role="search" method="get" class="header-search-form" action="#">
                    <input type="text" value="" name="s" class="header-search-field" placeholder="Search...">
                    <button type="submit" class="header-search-submit" title="Search">Search</button>
                </form>
            </li>
            <li class="box-login">
                <a class="icon_login" href="#"></a>
            </li>
            <li class="box-cart nav-top-cart-wrapper">
                <a class="icon_cart nav-cart-trigger active" href="#">
                    <span>3</span>
                </a>
                <div class="nav-shop-cart">
                    <div class="widget_shopping_cart_content">
                        <div class="woocommerce-min-cart-wrap">
                            <ul class="woocommerce-mini-cart cart_list product_list_widget ">
                                <li class="woocommerce-mini-cart-item mini_cart_item">
                                    <span>No Items in Shopping Cart</span>
                                </li>
                            </ul>
                        </div>
                        <!-- /.widget_shopping_cart_content -->
                    </div>
                </div>
                <!-- /.nav-shop-cart -->
            </li>
        </ul>
        <!-- /.menu-extra -->
        <div class="nav-wrap">
        <nav id="mainnav" class="mainnav">
        <ul class="menu">
            <li :class="{ active: title=='home'}">
                <a href="index.html">HOME</a>
            </li>
            <li :class="{ active: title=='shop'}">
                <a href="shop.html">SHOP</a>
            </li>
            <li :class="{ active: title=='faq'}">
                <a href="faqs.html">FAQ</a>
            </li>
            <li :class="{ active: title=='contact'}">
                <a href="contact.html">CONTACT</a>
            </li>
        </ul>
    </nav>
        </div>
        <!-- /.nav-wrap -->
    </div>
    <!-- /.container-fluid -->
</header>`,
    data: () => {
        return {
            message: 'Hello Vue!'
        }
    }
})



var app = new Vue({
    el: '#the-header',
    data: {
        message: 'Hello Vue!'
    }
})

require.config({
    baseUrl: "/js/",
    paths: {
        "store": "store"
    }
});

require(["store"], function (store) {
    Vue.use(store.store)
});

