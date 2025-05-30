<template>
  <div class="bg_img">
    <Swiper
      :effect="cards"
      :grab-cursor="true"
      :modules="modules"
      class="mySwiper"
      :slidesPerView="1"
      :spaceBetween="10"
    >
      <SwiperSlide>
        <div class="">
          <img src="@/assets/CardsEffect/81F3F6EA-1018-43EC-8BE5-A15B7B78FD4B.jpg" class="w-full h-full object-cover rounded-xl" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="">
          <img src="@/assets/CardsEffect/81F3F6EA-1018-43EC-8BE5-A15B7B78FD4B.jpg" class="w-full h-full object-cover rounded-xl" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="">
          <img src="@/assets/CardsEffect/81F3F6EA-1018-43EC-8BE5-A15B7B78FD4B.jpg" class="w-full h-full object-cover rounded-xl" />
        </div>
      </SwiperSlide>

    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'

// import styles bundle
import 'swiper/css/bundle'

export default {
  name: 'ImgSlide',
  data () {
    return {
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [EffectCards]
    }
  }
}
</script>

<style scoped>
.mySwiper {
  width: 100%;
  /* ขนาด container */
  max-width: 250px;
  /* ความสูงของ Swiper */
  height: 400px;
  margin: auto;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-size: 24px;
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
