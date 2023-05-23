<script>

export default {
    name: 'Card',
    props: ['card'],
    data() {
        return {
            // 
        };
    },
}
</script>

<!-- ************** -->
<!-- template -->
<!-- ************** -->
<template> 

    <section class="card">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1>card</h1>
                </div>
            </div>
        </div>
    </section>

</template>

<!--**********************-->
<!-- style scss -->
<!--**********************-->

<style lang="scss" scoped>

@use '../styles/generic.scss' as *;

.card {
    background-color: $color-primary;
    padding: 2rem 0;
}

</style>