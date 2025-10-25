<template>
    <div v-if="showAlert" class="errorAlert alert alert-danger d-flex justify-content-between align-items-center" role="alert">
        <span>{{errorMessage}}</span>
        <button type="button" class="btn btn-link text-white p-0 pl-2" @click="closeAlert()" aria-label="Dismiss error">
            <i class="fa fa-times-circle fa-lg" aria-hidden="true"></i>
        </button>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    name: 'errorAlert',
    computed:{
        ...mapGetters([
        'errorMessage']),
        showAlert: function(){
           return this.errorMessage != "";
        }
         
    },
    methods:{
        ...mapActions([
            'setError'
        ]),
        closeAlert(){ 
            this.$store.dispatch("setError", "");
        }
    }
}
</script>
