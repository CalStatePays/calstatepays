<template>
  <div class="IndustryCarousel">
    <h3 class="IndustryCarousel__MajorTitle">Top Industries of Employment<br>in {{major}} Majors</h3>
    <p class="IndustryCarousel__MajorSubTitle">Employment 5 Years After Leaving Higher Education <i class="fa fa-question-circle" aria-hidden="true" data-toggle="tooltip" data-placement="right" data-html="true" title="These are the industries Bachelors Graduates worked in five years after they left education. The industry categories are from the North American Industry Classification System (NAICS) at the two digit level. They are not occupational categories. For more information see the FAQ page."></i></p>
    <p v-if="!empty" class="IndustryCarousel__NoIndustryMessage">No Employment Sector data is available for this major.</p>
    <Carousel
      v-else
      :items-to-show="3"
      :wrap-around="industries.length > 3"
      class="IndustryCarousel__VueCarousel"
      navigation-enabled
      pagination-enabled
    >
      <Slide v-for="(industry,index) in industries" :key="index">
        <industry-carousel-card :industry="industry" class="IndustryCarousel__VueCarouselSlide"/>
      </Slide>
    </Carousel>
    <br>
    <br>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import $ from 'jquery';
import industryCarouselCard from './industry-carousel-card';

export default {
  props: ['industries', 'empty', 'major'],
  mounted() {
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });
  },

  components: {
    industryCarouselCard,
    Carousel,
    Slide
  }
}
</script>
