<template>
	<div>
		<csu-data-img-banner>
			<template #title>
				<h2 class="CSUDataImgBanner__dataTitle">
					<span>Personal Financial Return on Education</span>
				</h2>
			</template>
			<template #copy>
				<p class="CSUDataImgBanner__dataCopy">
					Education costs money and takes time. In return, it increases earnings after graduation. Financial return is an interest-rate-like number describing the monetary rewards to education that you can compare to financial investments.
				</p>
			</template>
		</csu-data-img-banner>
		<sub-nav/>
		<div class="graphContent">
			<div class="container">
				<div class="row pt-md-2">
					<aside class="col-lg-3 col-12">
						<pfre-form/>
					</aside>
					<div class="col-lg-9 col-12">
						<pfre-progress class="bar-graph-card mt-md-3 mt-lg-0"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import csuDataImgBanner from "../../../components/global/csu-data-img-banner";
import subNav from "../../../components/global/sub-nav.vue";
import pfreForm from "../../../components/pfre/pfre-form.vue";
import pfreProgress from "../../../components/pfre/pfre-progress.vue";
import { mapGetters ,mapActions} from "vuex";
export default {
	components: {
		csuDataImgBanner,
		pfreForm,
		pfreProgress,
		subNav
	},
	methods: {
		...mapActions(['setUniversity'])
	},
	mounted() {
		this.setUniversity('all');
	},
};
</script>
