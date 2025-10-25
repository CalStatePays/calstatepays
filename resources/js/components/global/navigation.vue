<template>
    <header class="site-header">
        <div class="container-fluid">
            <div class="row">
                <div  class="col-8 col-sm-3 order-2 order-sm-1 align-self-center py-2">
                    <router-link to="/">
                        <img :src="this.url + '/img/cspLogos/csp-logo.svg'" class="float-md-left nav-logo mx-auto d-inline-block" alt="Cal State Pays logo">
                        <img :src="this.url + '/img/cspLogos/logo-mini.svg'" class="float-md-left nav-logo--small mx-auto d-inline-block" alt="Cal State Pays logo">

                    </router-link>
                    <router-link to="/research">
                        <img :src="this.url + '/img/otherLogos/strada-logo.png'" class="nav-logo-secondary d-inline-block d-sm-none" alt="Strada Logo">
                    </router-link>
                </div>
                <div class="col-4 d-sm-none order-3 align-self-center hamburger-btn-position">
                    <button @click="toggleShowNav()" type="button" role="button">
                        <i id="nav-icon" class="fa fa-bars" role="button" alt="mobile menu toggle"></i>
                        <span class="sr-only">Toggle Menu</span> 
                    </button>
                </div>
                <div class="col-12 col-sm-6 order-6 order-sm-2 align-self-md-end p-0">
                    <nav class="navbar navbar-expand-sm p-0">
                        <div class="collapse navbar-collapse justify-content-center" id="nav-list">
                            <ul class="navbar-nav d-flex flex-column flex-sm-row justify-content-center text-center">
                                <RouterLink to="/" custom v-slot="{ href, navigate, isExactActive }">
                                    <li :class="['nav-link', { 'hr-nav': isExactActive }]">
                                        <a
                                            :href="href"
                                            @click.prevent="handleNavClick(navigate)"
                                            class="nav-item"
                                            role="menuitem"
                                        >
                                            Home
                                        </a>
                                    </li>
                                </RouterLink>
                                <RouterLink :to="`/data/${selectedDataPage}`" custom v-slot="{ href, navigate, isActive }">
                                    <li :class="['nav-link', { 'hr-nav': isActive }]">
                                        <a
                                            :href="href"
                                            @click.prevent="handleNavClick(navigate)"
                                            class="nav-item"
                                            role="menuitem"
                                        >
                                            Data
                                        </a>
                                    </li>
                                </RouterLink>
                                <RouterLink to="/faq" custom v-slot="{ href, navigate, isActive }">
                                    <li :class="['nav-link', { 'hr-nav': isActive }]">
                                        <a
                                            :href="href"
                                            @click.prevent="handleNavClick(navigate)"
                                            class="nav-item"
                                            role="menuitem"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                </RouterLink>
                                <RouterLink to="/about" custom v-slot="{ href, navigate, isActive }">
                                    <li :class="['nav-link', { 'hr-nav': isActive }]">
                                        <a
                                            :href="href"
                                            @click.prevent="handleNavClick(navigate)"
                                            class="nav-item"
                                            role="menuitem"
                                        >
                                            About
                                        </a>
                                    </li>
                                </RouterLink>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="d-none d-sm-block col-3 col-md-3 order-3 align-self-center">
                    <div class="navbar-text small w-100">
                        <router-link to="/research">
                            <img :src="this.url + '/img/otherLogos/strada-logo.png'" class="float-right nav-logo-secondary mx-auto d-sm-block" alt="Strada Logo">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div id="nav-overlay"></div>
    </header>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
	data() {
		return {
			url: "",
		};
	},
	methods: {
		handleNavClick(navigate) {
			this.toggleShowNav();
			navigate();
		},
		toggleShowNav() {
			var showCheck = document.getElementById("nav-list");
			if (!showCheck) {
				return;
			}
			if (showCheck.classList.contains("show")) {
				var navItem = document.getElementById("nav-list");
				if (navItem) {
					navItem.classList.remove("show");
				}
				var navIcon = document.getElementById("nav-icon");
				if (navIcon) {
					navIcon.classList.remove("fa-times");
					navIcon.classList.add("fa-bars");
				}
				var overlay = document.getElementById("nav-overlay");
				if (overlay) {
					overlay.style.display = "none";
				}
			} else {
				var navItem = document.getElementById("nav-list");
				if (navItem) {
					navItem.classList.add("show");
				}
				var navIcon = document.getElementById("nav-icon");
				if (navIcon) {
					navIcon.classList.remove("fa-bars");
					navIcon.classList.add("fa-times");
				}
				var overlay = document.getElementById("nav-overlay");
				if (overlay) {
					overlay.style.display = "block";
				}
			}
        }
    },
    computed: {
        ...mapGetters(['selectedDataPage']),
    },
	created() {
		this.url = window.baseUrl;
	}
};
</script>
