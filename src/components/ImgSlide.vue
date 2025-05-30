<template>
  <div>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      effect="cards"
      grabCursor="true"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="max-w-[310px] border-2 border-salmon rounded overflow-hidden">
          <img src="@/assets/CardsEffect/81F3F6EA-1018-43EC-8BE5-A15B7B78FD4B.jpg" alt="Gaming Setup" class="h-[200px] w-full object-contain" />
        </div>
        <div class="max-w-[310px] border-2 border-salmon rounded overflow-hidden">
          <img src="@/assets/CardsEffect/81F3F6EA-1018-43EC-8BE5-A15B7B78FD4B.jpg" alt="Gaming Setup" class="h-[200px] w-full object-contain" />
        </div>
        <div class="max-w-[310px] border-2 border-salmon rounded overflow-hidden">
          <img src="@/assets/CardsEffect/81F3F6EA-1018-43EC-8BE5-A15B7B78FD4B.jpg" alt="Gaming Setup" class="h-[200px] w-full object-contain" />
        </div>
      <!-- </swiper-slide> -->
      <!-- <swiper-slide> -->
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'ImgSlide',
  data: () => ({
    card_img: require('@/assets/CardsEffect/81F3F6EA-1018-43EC-8BE5-A15B7B78FD4B.jpg'),
    slides: [
      '@/assets/14EAA6C0-1E93-4AFE-AA59-A839A8610CAB.jpg',
      '@/assets/14EAA6C0-1E93-4AFE-AA59-A839A8610CAB.jpg',
      '@/assets/14EAA6C0-1E93-4AFE-AA59-A839A8610CAB.jpg'
    ]
  }),
  components: {
    // ,CardComponent
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped>
.mySwiper {
  width: 100%;
  max-width: 400px; /* ขนาด container */
  height: 400px; /* ความสูงของ Swiper */
  margin: auto;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>
