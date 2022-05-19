<template>
    <div class="homeSeals">
        <div class="container">
            <div class="row">
                <div class="col-md-12 mb-4">
                    <h2 class="text-center font-italic">
                        <span class="homepageUniversities__headline"> Endorsed by {{ universitySeals.length }} CSUs,</span>
                        <span class="homepageUniversities__headline"> CalStatePays combines</span>
                        <span class="homepageUniversities__headline"> the data of</span>
                        <span class="homepageUniversities__headline"> SoCal's top public universities</span>
                    </h2>
                </div>
                <div class="row no-gutters">
                    <figure  v-for="(item, index) in universitySeals" :key="index" class="col-md col-sm-3 col-3 homepageUniversities__svg">
                        <a :href="item.admission" target="_blank">
                            <img :src="item.url" :alt="item.alt">
                            <figcaption class="text-center" >{{item.name}}</figcaption>
                        </a>
                    </figure>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    name: "campus-seals",
    data() {
        return {
            url: "",
            isShowing: false,
            universitySeals:[
                {url: window.baseUrl + '/img/csuseals/long_beach_seal.svg',name:'Long Beach',alt:'California State University Long Beach seal',admission:'https://www.csulb.edu/admissions'},
                {url: window.baseUrl + '/img/csuseals/poly_seal.svg',name:'Pomona',alt:'California State University Polytechnic Pomona seal',admission:'https://www.cpp.edu/admissions/index.shtml'},
                {url: window.baseUrl + '/img/csuseals/fullerton_seal.svg',name:'Fullerton',alt:'California State University Fullerton seal',admission:'https://admissions.fullerton.edu/'},
                {url :window.baseUrl + '/img/csuseals/northridge_seal.svg',name:'Northridge',alt:'California State University Northridge seal',admission:'https://www.csun.edu/admissions-records'},
                {url: window.baseUrl + '/img/csuseals/dominguez_seal.svg',name:'Dominguez Hills',alt:'California State University Dominguez Hills seal',admission:'https://www.csudh.edu/records-registration/'},
                {url: window.baseUrl + '/img/csuseals/channel_islands_seal.svg',name:'Channel Islands',alt:'California State University Channel Islands seal',admission:'https://www.csuci.edu/admissions/'},                
            ]
        };
    }
}
</script>

