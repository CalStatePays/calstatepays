import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate'
import store from '../store';

//PAGES
import home from './views/home/index.vue';
import pfre from './views/pfre/index.vue';
import majors from './views/majors/index.vue';
import industries from './views/industries/index.vue';
import faq from './views/faq/index.vue';
import research from './views/research/index.vue';
import researchcsun from './views/researchcsun/index.vue';
import about from './views/about/index.vue';

// INIT VUE-ROUTER
Vue.use(VueRouter);
Vue.use(Vuelidate);

const router = new VueRouter({
	routes: [
		{ path: '/', component: home },
		{ path: '/pfre', component: pfre },
		{ path: '/industries', component: industries},
		{ path: '/faq', component: faq},
		{ path: '/research', component: research },
		{ path: '/researchcsun', component: researchcsun },
		{ path: '/majors', component: majors },
		{ path: '/about', component: about },
	]
});

router.beforeEach(function (to, from, next) {
	setTimeout(() => {
		window.scrollTo(0,0);
	}, 100);
	next();
})

export default router;