<template>
  <div class="home">
    <GhostFaceless></GhostFaceless>
    <section class="bg-black" style="height: 5vh;"></section>
    <TotoroComponent></TotoroComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import GhostFaceless from '@/components/GhostFaceless.vue'
import TotoroComponent from '@/components/Totoro.vue'

export default {
  name: 'HomeView',
  components: {
    GhostFaceless,
    TotoroComponent
  }
}
</script>

<style scoped>
</style>
