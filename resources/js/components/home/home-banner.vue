<template>
    <div class="homeBanner">
        <h1 class="m-0">
            <img class="homeBanner__CSPLogo" :src="this.url + '/img/homeimages/CSP-logo-black.svg'" alt="Cal State Pays"/>
        </h1>
        <p class="m-0">
            <img class="homeBanner__Tagline" :src="this.url + '/img/homeimages/learn-what-youll-earn.svg'" alt="Learn What You'll Earn"/>
        </p>
    </div>
</template>

<script>
export default {
    data() {
		return {
			url: "",
			isShowing: false,
		};
	},
    created() {
        this.url = window.baseUrl
    },
}
</script>
