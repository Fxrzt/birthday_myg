<template>
  <div class="bg_img">
    <section class="pt-32 p-4 border border-solid border-black">
      <div class="grid grid-cols-12 gap-4 border border-solid border-red-500">
        <div class="col-start-3 col-span-8 bg-white font_Lobster_Two text-5xl font-medium block">
          <span class="font-semibold text-5xl">H</span>appy
        </div>
        <div class="col-start-3 col-span-8 bg-white font_Lobster_Two text-5xl font-medium block">
          <span class="font-semibold text-5xl">B</span>irthday
        </div>
        <div class="col-start-3 col-span-8 bg-white font_Lobster_Two text-5xl font-medium block">
          <span class="font-semibold text-5xl">K'</span>Phanita
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GhostFaceless'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg_img{
  background-image: url('/src/assets/BackgroundImg/tumblr_1280.jpg'); /* Vue CLI ใช้ @ สำหรับ src */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;                /* ✅ เต็มความสูงของหน้าจอ */
  width: 100%;                  /* ✅ เต็มความกว้าง */
}
</style>
