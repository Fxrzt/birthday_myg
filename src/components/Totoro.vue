<template>
  <div class="bg_img">
    <section>
        <div class="ccc">AAAAAA</div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TotoroComponent'
}
</script>

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
