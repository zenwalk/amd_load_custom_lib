console.log('hello');

define([
    'require',
    'vue',
    'owl',
    // 'at-ui'
], function (require, Vue, Owl) {
    'use strict';

    console.log(Owl);

    // Vue.use(AtUi)

    const HelloWorld = Owl.default['HelloWorld']
    // const FooBar = Owl.default['FooBar']

    new Vue({
        components: {
            // 'hello-world': HelloWorld,
            // 'foo-bar': FooBar
        },
        render: function (h) {
            return h(HelloWorld)
        }
    }).$mount('#app')

});
