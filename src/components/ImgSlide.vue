<template>
  <div class="bg_img pt-40 px-20 ">
    <div class="bg-white/30 backdrop-blur-md font_Mali text-white text-xl rounded-lg mb-7 p-3" >
      <h2>💝 ... Our Album ... 💕</h2>
    </div>
    <swiper
      :effect="'cards'"
      :grabCursor="true"
      :modules="modules"
      :cardsEffect="{ slideShadows: false }"
      class="mySwiper"
    >
      <swiper-slide >
        <img class="rounded-lg w-full h-96 object-cover" src="@/assets/CardsEffect/4.jpg" height="100%">
      </swiper-slide>
      <swiper-slide >
        <img class="rounded-lg w-full h-96 object-cover" src="@/assets/CardsEffect/2.jpg" height="100%">
      </swiper-slide>
      <swiper-slide >
        <img class="rounded-lg w-full h-96 object-cover" src="@/assets/CardsEffect/6.jpg" height="100%">
      </swiper-slide>
      <swiper-slide >
        <img class="rounded-lg w-full h-96 object-cover" src="@/assets/CardsEffect/1.jpg" height="100%">
      </swiper-slide>
      <swiper-slide >
        <img class="rounded-lg w-full h-96 object-cover" src="@/assets/CardsEffect/5.jpg" height="100%">
      </swiper-slide>
      <swiper-slide >
        <img class="rounded-lg w-full h-96 object-cover" src="@/assets/CardsEffect/3.jpg" height="100%">
      </swiper-slide>
      <swiper-slide >
        <img class="rounded-lg w-full h-96 object-cover" src="@/assets/CardsEffect/8.jpg" height="100%">
      </swiper-slide>
      <swiper-slide >
        <img class="rounded-lg w-full h-96 object-cover" src="@/assets/CardsEffect/7.jpg" height="100%">
      </swiper-slide>
    </swiper>
    <img src="../assets/imgGif/ดาวน์โหลด.gif" class="max-w-44 img_png_cat_bus pngMove" alt="My Cat Bus Gif" />
    <img src="../assets/imgGif/d5o2bsr-1336ebb8-1235-415d-b7ed-225f1b544e82.gif" class="max-w-20 img_png_blue_totoro" alt="My Blue Totoro Gif" />
    <img src="../assets//imgGif/200w.gif" class="max-w-36 img_png_totoro_jump" alt="My Totoro Gif" />
    <img src="../assets//imgGif//200w (1).gif" class="min-w-2 max-w-20 img_png_friend" alt="My Friend Gif" />
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/effect-cards'

// import required modules
import { EffectCards } from 'swiper/modules'

export default {
  name: 'ImgSlide',
  data () {
    return {
    }
  },
  setup () {
    return {
      modules: [EffectCards] // ใช้โมดูล EffectCards
    }
  },
  components: {
    Swiper, SwiperSlide
  }
}
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%; /* กำหนดขนาดที่เพียงพอสำหรับการแสดงผล */
}

.bg_img{
  background-image: url('@/assets/BackgroundImg/slide_bg.jpg'); /* Vue CLI ใช้ @ สำหรับ src */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;                /* ✅ เต็มความสูงของหน้าจอ */
  width: 100%;                  /* ✅ เต็มความกว้าง */
  overflow: hidden;
  position: relative; /* เพิ่มบรรทัดนี้ */
}

/* #region PNG Girl Animation */
.img_png_cat_bus{
  position: absolute; /* ต้องใช้ position เพื่อให้ left ทำงาน */
  top: 71%;
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
  top: 83%;
  left: 4%;
  pointer-events: none; /* ป้องกันการคลิก */
  z-index: 0;
}

.img_png_blue_totoro{
  position: absolute; /* ต้องใช้ position เพื่อให้ left ทำงาน */
  top: 81%;
  left: 56%;
  pointer-events: none; /* ป้องกันการคลิก */
  z-index: 0;
}

.img_png_friend{
  position: absolute; /* ต้องใช้ position เพื่อให้ left ทำงาน */
  top: 7%;
  left: 78%;
  pointer-events: none; /* ป้องกันการคลิก */
  z-index: 0;
}

</style>
