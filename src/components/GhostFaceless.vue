<template>
  <div class="bg_img" >
    <NavComp></NavComp>
    <section class="pt-14 p-4 border border-solid border-black">
      <div class="grid grid-cols-12 gap-8 border border-solid border-red-500">
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
    <img src="../assets/imgGif/studio-ghibli.gif" class="min-w-2 img_png_girl pngMove" alt="My Girl Gif" />
    <img src="../assets/imgGif/ghost.gif" class="min-w-2 max-w-32 img_png_ghost" alt="My Ghost Gif" />
    <img src="../assets//imgGif//200w (1).gif" class="min-w-2 max-w-20 img_png_friend" alt="My Friend Gif" />
  </div>
</template>

<script>
import NavComp from './NavComp.vue'

export default {
  name: 'GhostFaceless',
  components: {
    NavComp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg_img{
  background-image: url('@/assets/BackgroundImg/tumblr_1280.jpg'); /* Vue CLI ใช้ @ สำหรับ src */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;                /* ✅ เต็มความสูงของหน้าจอ */
  width: 100%;                  /* ✅ เต็มความกว้าง */
  overflow: hidden;
  position: relative; /* เพิ่มบรรทัดนี้ */
}
/* #region PNG Girl Animation */
.img_png_girl{
  position: absolute; /* ต้องใช้ position เพื่อให้ left ทำงาน */
  top: 80%;
  left: -32%;
  pointer-events: none; /* ป้องกันการคลิก */
  z-index: 1;
}

.pngMove{
    animation: pngMove 5s ease-in-out infinite; /* ใช้ Animation */
  }

  @keyframes pngMove {
    0% {
      left: -32%;
    }
    100% {
      left: 100%;
    }
  }
/* #endregion */

/* #region PNG Ghost Animation */
.img_png_ghost{
  position: relative; /* ต้องใช้ position เพื่อให้ left ทำงาน */
  top: 42%;
  left: 20%;
  pointer-events: none; /* ป้องกันการคลิก */
  z-index: 0;
}
/* #endregion */

/* #region PNG Friend Animation */
.img_png_friend{
  position: absolute; /* ต้องใช้ position เพื่อให้ left ทำงาน */
  top: 42%;
  left: 64%;
  pointer-events: none; /* ป้องกันการคลิก */
  z-index: 0;
}
/* #endregion */

/* 40rem (640px) */
@media (width >= 40rem) {
}

/* 48rem (768px) */
@media (width >= 48rem) {  }

/* 64rem (1024px) */
@media (width >= 64rem) {  }

/* 80rem (1280px) */
@media (width >= 80rem) {  }

/* 96rem (1536px) */
@media (width >= 96rem) {  }
</style>
