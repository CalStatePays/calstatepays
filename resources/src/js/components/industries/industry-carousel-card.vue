<template>
  <div>
    <div class="IndustryCarousel__InfoWrapper" v-bind:style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + industry.image + ')', backgroundSize: 'cover', backgroundPosition: 'center' }">
        <h4 v-if="industry" class="IndustryCarousel__IndustryTitle">{{ industry.title }}</h4>
        <p class="IndustryCarousel__Percentage">{{ formatPercentages(industry.percentage) }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['industry'],

  methods: {
    formatPercentages(value) {
      if (value) {
        let finalPercentage = value.toString();
        return finalPercentage.slice(0,-1);
      }
      return value;
    }
  }

}
</script>

