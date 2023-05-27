<script>
import NavBarFirstHalf from './components/NavBarFirstHalf.vue';
import NavBarSecondHalf from './components/NavBarSecondHalf.vue';

export default {
  components: { NavBarFirstHalf, NavBarSecondHalf}  
}
</script>


<template>
  <NavBarFirstHalf/>
  <NavBarSecondHalf/>
  <router-view/>
</template>
