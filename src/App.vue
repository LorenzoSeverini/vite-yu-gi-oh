
<script>
import HeaderYu from './components/HeaderYu.vue';
import MainPrincipal from './components/MainPrincipal.vue';

import { store } from './data/store';
import axios from 'axios';

export default {

    name: 'App',
    components: {
        HeaderYu,
        MainPrincipal,
    },

    data() {
        return {
            store 
        };
    },

    methods: {

        GenerateCards() {
            axios.get(this.store.urlAPI).then(response => {
                this.store.cards = response.data.data;
                this.store.loadingCards = false;
            }).catch(error => {
                setTimeout(() => {
                this.store.error = true;
                this.store.errorMessage = error.message;
                this.store.loadingCards = false;
                }, 5000);
                
            });
        },

        
    }, 

    mounted() {
        this.GenerateCards();
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
