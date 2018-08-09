
Vue.component('the-header', {
  props: ['title'],
  template: `<nav id="mainnav" class="mainnav">
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
                        <a href="contact-v2.html">CONTACT</a>
                    </li>
                </ul>
            </nav>`,
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