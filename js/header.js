

require.config({
    baseUrl: "/js/",
    paths: {
        text: 'text',
        store: "store"
    }
});

require(["store", "text!./header.html"], function (store, header) {
    Vue.use(store.store)
    Vue.component('the-header', {
        props: ['title'],
        template: header,
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
});