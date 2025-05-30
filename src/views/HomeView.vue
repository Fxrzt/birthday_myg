<template>
  <div class="home">
    <GhostFaceless></GhostFaceless>
    <TotoroComponent></TotoroComponent>
    <img-slide></img-slide>
  </div>
</template>

<script>
// @ is an alias to /src
import GhostFaceless from '@/components/GhostFaceless.vue'
import ImgSlide from '@/components/ImgSlide.vue'
import TotoroComponent from '@/components/TotoroComponent.vue'

export default {
  name: 'HomeView',
  components: {
    GhostFaceless,
    TotoroComponent,
    ImgSlide
  }
}
</script>
