<template>
  <div class="IndustryCarousel">
    <h3 class="IndustryCarousel__MajorTitle">Top Industries of Employment<br>in {{major}} Majors</h3>
    <p class="IndustryCarousel__MajorSubTitle">Employment 5 Years After Leaving Higher Education <i class="fa fa-question-circle" aria-hidden="true" data-toggle="tooltip" data-placement="right" data-html="true" title="These are the industries Bachelors Graduates worked in five years after they left education. The industry categories are from the North American Industry Classification System (NAICS) at the two digit level. They are not occupational categories. For more information see the FAQ page."></i></p>
    <p v-if="!empty" class="IndustryCarousel__NoIndustryMessage">No Employment Sector data is available for this major.</p>
    <carousel v-else :navigationEnabled="true" :perPage=3 class="IndustryCarousel__VueCarousel" :paginationEnabled=true>
      <slide  v-for="(industry,index) in industries" :key="index">
        <industry-carousel-card :industry="industry" class="IndustryCarousel__VueCarouselSlide"/>
      </slide>
    </carousel>
    <br>
    <br>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import $ from 'jquery';
import industryCarouselCard from './industry-carousel-card';
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['industries', 'empty', 'major'],
  mounted() {
    $('[data-toggle="tooltip"]').tooltip();
  },

  components: {
    industryCarouselCard,
    Carousel,
    Slide
  }
}
</script>


