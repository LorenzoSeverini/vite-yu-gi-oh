<!-- header -->
<script>

  export default {
    name: 'HeaderYu',

    data() {
      return {
        title: 'Yu Gi Oh!'
      }
    },

    methods: {
      //
    }
  }
</script>

<!-- template -->
<template>

  <div class="header">
    <div class="header-title">
      <h1>{{ title }}</h1>
    </div>
  </div>
  
</template>

<!-- style -->
<style lang="scss" scoped>

@use '../styles/generic.scss' as *;

  .header {
    background-color: $color-secondary;
    color: $color-tertiary;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6.25rem;
  }

  .header-title {
    font-size: $font-size-xl;

    h1 {
      font-weight: $font-weight-bold;;

      &:hover {
        color: $color-primary;
        cursor: pointer;
      }
    }
  }
</style>
