<script>
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()

    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
}
</script>

<template>
  <div>
    <button @click="goBack">
      Back
    </button>
  <header>
    <h1> Brute Force Visualisation</h1>
  </header>
 
  </div>
</template>

<style scoped>

header {
  line-height: 1.5;
  align-items: center;
  justify-content: center;
}

div {
  grid-column: span 2;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  div {
    grid-column: span 2;
  }
}
</style>
