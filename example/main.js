import Vue from "vue"

// console.log(Vue);

import app from "./app.vue"

new Vue({
    el:"#app",
    render(h){
        return h(app);
    },
    components:{
        app
    },
})