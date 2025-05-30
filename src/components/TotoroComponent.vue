<template>
  <div class="bg_img" >
    <img src="../assets/imgGif/ดาวน์โหลด.gif" class="max-w-44 img_png_cat_bus pngMove" alt="My Cat Bus Gif" />
    <img src="../assets/imgGif/d5o2bsr-1336ebb8-1235-415d-b7ed-225f1b544e82.gif" class="max-w-20 img_png_blue_totoro" alt="My Blue Totoro Gif" />
    <img src="../assets//imgGif/bd7b2e6d9f24b7bf4f1ee543a0e4d376.gif" class="max-w-28 img_png_black_cat" alt="My Black Cat Gif" />
    <img src="../assets//imgGif/200w.gif" class="max-w-36 img_png_totoro_jump" alt="My Totoro Gif" />
  </div>
</template>

<script>
export default {
  name: 'TotoroComponent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg_img{
  background-image: url('@/assets/BackgroundImg/Wallpaper\ ideas.jpg'); /* Vue CLI ใช้ @ สำหรับ src */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;                /* ✅ เต็มความสูงของหน้าจอ */
  width: 100%;                  /* ✅ เต็มความกว้าง */
  border: 2px solid red;
  overflow: hidden; /* บังคับไม่ให้ลูกล้นออกมา */
  position: relative; /* เพิ่มบรรทัดนี้ */
}

/* #region PNG Girl Animation */
.img_png_cat_bus{
  position: absolute; /* ต้องใช้ position เพื่อให้ left ทำงาน */
  top: 70%;
  left: 110%;
  pointer-events: none; /* ป้องกันการคลิก */
  z-index: 1;
}

.pngMove{
    animation: pngMove 3s ease-in-out infinite; /* ใช้ Animation */
  }

  @keyframes pngMove {
    0% {
      left: 110%;
    }
    100% {
      left: -45%;
    }
  }
/* #endregion */

.img_png_totoro_jump{
  position: absolute; /* ต้องใช้ position เพื่อให้ left ทำงาน */
  top: 57%;
  left: 7%;
  pointer-events: none; /* ป้องกันการคลิก */
  z-index: 0;
}

.img_png_blue_totoro{
  position: absolute; /* ต้องใช้ position เพื่อให้ left ทำงาน */
  top: 59%;
  left: 71%;
  pointer-events: none; /* ป้องกันการคลิก */
  z-index: 0;
}

.img_png_black_cat{
  position: absolute; /* ต้องใช้ position เพื่อให้ left ทำงาน */
  top: 83%;
  left: 3%;
  pointer-events: none; /* ป้องกันการคลิก */
  z-index: 0;
}

</style>
