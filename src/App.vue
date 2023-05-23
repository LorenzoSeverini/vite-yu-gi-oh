
<script>
import HeaderYu from './components/HeaderYu.vue';
import MainPrincipal from './components/MainPrincipal.vue';

import { store } from './data/store';
import axios from 'axios';

import Cardadata from './components/Card.vue';

export default {
    name: 'App',
    components: {
        HeaderYu,
        MainPrincipal,
        Cardadata,
    },
    data() {
        return {
            store 
        };
    },
    methods: {
        // 
    },  
    mounted() {
        axios.get(this.store.urlAPI).then(response => {
        this.store.cards = response.data.results;
        this.store.loading = false;
        })
        .catch(error => {
            console.log(' error :( ' + error);
            this.store.cards = [];
            this.store.loading = false;
        }); 
    },   
}
</script>

<template>
    <header>
        <HeaderYu />
    </header>

    <main>
        <MainPrincipal />
    </main>

</template>

<style lang="scss" scoped></style>
