/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

//All imported modules that are used on the app

import moment from "moment";
import {
    Form,
    HasError,
    AlertError
} from "vform";
import VueRouter from "vue-router";
import VueProgressBar from "vue-progressbar";
import Swal from "sweetalert2";
window.Swal = Swal;

window.Form = Form;

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});

Window.Toast = Toast;

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.use(VueRouter);
Vue.use(VueProgressBar, {
    color: "rgb(143, 255, 199)",
    failedColor: "red",
    height: "3px"
});

const routes = [{
        path: "/dashboard",
        component: require("./components/Dashboard.vue").default
    },
    {
        path: "/profile",
        component: require("./components/Profile.vue").default
    },
    {
        path: "/users",
        component: require("./components/Users.vue").default
    },
    {
        path: "/developer",
        component: require("./components/Developer.vue").default
    }
];

const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});

Vue.filter("upText", function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});

Vue.filter("myDate", function (created) {
    return moment(created).format("MMMM Do YYYY"); // February 14th 2020, 9:09:12 am
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

const app = new Vue({
    el: "#app",
    router
}).$mount("#app");
