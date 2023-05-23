<!-- main -->

<!-- ************** -->
<!-- script -->
<!-- ************** -->

<script>

import { store } from '../data/store';

export default {
    name: 'MainPrincipal',
   
    data() {
        return {
            store 
        };
    },

    methods: {
        ImageUrl(url) {
            return new URL(url);
        },
    },
}
</script>

<!-- ************** -->
<!-- template -->
<!-- ************** -->

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <div v-if="store.loadingCards" class="loading-container">
                    <div class="spinner-border" role="status">
                        <img src="../assets/ping-pong-preloader-gif.gif" alt="">
                        <div class="text-loading">Loading...</div>
                    </div>
                </div>
                <div v-else-if="store.error" class="container-error-message">
                    <h3>{{store.errorMessage}}</h3>
                </div>
                <div v-else class="row-card">
                    <div v-for="card in store.cards" :key="card.id" class="col-Card">
                        <div class="card">
                            <img :src="card.card_images[0].image_url" class="card-img-top" alt="...">

                            <div class="card-body">
                                <div class="card-name">card name: {{card.name}} </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<!-- ************** -->
<!-- style -->
<!-- ************** -->

<style lang="scss" scoped>

@use '../styles/generic.scss' as *;

.container {
    max-width: $max-width;
    margin: $margin-auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.row {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .col-12 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
}

.loading-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    .spinner-border {
    width: 12.5rem;
    height: 12.5rem;
    }

    img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    }

    .text-loading {
    font-size: 1.5rem;
    font-weight: 700;
    color: $color-secondary;
    text-align: center;
    }

}

.container-error-message {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: $color-danger;
    }
}

.row-card {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    

    .col-Card {
        width: calc(100% / 4 - 1rem);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: $margin-auto;

    
        .card {
            width: 18.75rem;
            padding: 1rem;
            background-color: $color-primary;
            color: $color-secondary;
            font-size: 1.5rem;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            &:hover {
            background-color: $color-secondary;
            color: $color-primary;
            }

            .card-img-top {
            width: 100%;
            height: 100%;
            object-fit: contain;
            }

            .card-body {
            padding: 1rem;

                .card-name {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: $color-tertiary;
                    text-align: center;


                }
            }

        }
    }
}
</style>

