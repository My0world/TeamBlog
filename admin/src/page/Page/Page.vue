<template>
    <div class="Page">
        <ListView :tableData="page"></ListView>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';   
    export default {
        name: "Page",
        data() {
            return {}
        },
        computed:{
            ...mapGetters({page: "Mine/page"})
        },
        components: {},
        methods: {}
    }
</script>


<style>
    .Page{
        
    }
</style>

