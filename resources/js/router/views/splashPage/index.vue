<template>
<div>
  <csu-data-img-banner>
    <template #title>
      <h3 class="CSUDataImgBanner__dataTitle">
        <span>Financial Return on Education</span>
      </h3>
    </template>
    <template #copy>
      <p class="CSUDataImgBanner__dataCopy">
        Education costs money and takes time. In return, it increases earnings after graduation. Financial return is an interest-rate-like number describing the monetary rewards to education that you can compare to financial investments.
      </p>
    </template>
  </csu-data-img-banner>
    <sub-nav/>
    <div class="splashPage graphContent row align-items-center">
      <div class="col">
        <p>Coming soon</p>
      </div>
    </div> 
</div>   
</template>
<script>
import csuDataImgBanner from "../../../components/global/csu-data-img-banner";
import subNav from "../../../components/global/sub-nav.vue";
export default {
    components:{
      csuDataImgBanner,
      subNav,
    },
};
</script>
