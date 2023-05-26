<!-- <script>

import Sorting from './pages/Sorting.vue'

const routes = {
  '/': Main,
  '/sorting': Sorting
}

export default {
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script> -->
<script></script>


<template>
  <router-view/>
</template>