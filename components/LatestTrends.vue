<template>
  <section class="latest-trends" id="inspirations">
    <div class="top-row">
      <div class="heading">
        <h2>Be aware of the latest trends</h2>
        <p>Stay informed of new trends, but also of our various offers.</p>
        <a href="#" class="learn-link">Learn more &rsaquo;</a>
      </div>
      <form class="newsletter" @submit.prevent>
        <input type="email" placeholder="email@address.com" />
        <button type="submit">Subscribe</button>
      </form>
    </div>

    <div class="gallery-inspiration-row desktop-only">
      <div class="gallery-wrap" style="position: relative;">
        <!-- Swiper main slider -->
        <Swiper
          :slides-per-view="3"
          :space-between="20"
          :loop="false"
          :pagination="{
            el: '.custom-pagination',
            type: 'custom',
            renderCustom: renderCustomPagination
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="gallery-swiper"
        >
          <SwiperSlide v-for="(img, i) in images" :key="i">
            <div class="trend-image">
              <img :src="img" alt="Trend image" />
            </div>
          </SwiperSlide>
        </Swiper>
        <!-- Pagination below swiper -->
        <span class="pagination custom-pagination block mt-4 text-center"></span>
      </div>
    </div>

    <!-- Inspirations Desktop -->
    <div class="inspirations desktop-only">
      <div class="ins-h3">Inspirations</div>
      <p class="ins-p">
        Our experts are keen to stay on top of trends in order to offer you
        new inspirations for your interior and exterior every day. Remember
        that to inspire you we have to inspire ourselves and we want to share
        that with you.
      </p>
      <div class="ins-div">
        <button
          class="arrow prev"
          type="button"
          @click="slidePrev"
        >
          <img src="/images/Button-right.svg" alt="Previous" style="width:24px; height:24px;" />
        </button>
        <button
          class="arrow next"
          type="button"
          @click="slideNext"
        >
          <img src="/images/Button-left.svg" alt="Next" style="width:24px; height:24px;" />
        </button>
      </div>
    </div>

    <!-- MOBILE ONLY SECTION -->
    <div class="mobile-only mobile-inspirations-section">
      <div class="mobile-inspirations-title">Inspirations</div>
      <div class="mobile-inspirations-desc">
        Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.
      </div>
      <div class="inspirations-images">
        <div class="inspirations-image-wrap">
          <img src="/images/living-room.jpg" alt="Chair" />
          <div class="inspirations-image-label">Living room</div>
        </div>
        <div class="inspirations-image-wrap">
          <img src="/images/living-room.jpg" alt="Cooked" />
          <div class="inspirations-image-label">Living room</div>
        </div>
        <div class="inspirations-image-wrap">
          <img src="/images/living-room.jpg" alt="Living room" />
          <div class="inspirations-image-label">Living room</div>
        </div>
        <div class="inspirations-image-wrap">
          <img src="/images/living-room.jpg" alt="Tables" />
          <div class="inspirations-image-label">Living room</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = [
  '/images/trend1.jpg',
  '/images/trend2.jpg',
  '/images/trend3.jpg',
  '/images/trend4.jpg',
  '/images/trend5.jpg'
]

const swiperInstance = ref(null)

function renderCustomPagination(swiper, current, total) {
  const pad = (n) => String(n).padStart(2, '0')
  return `${pad(current)} / ${pad(total)}`
}

function onSwiper(swiper) {
  swiperInstance.value = swiper
  // Fix navigation bug in Nuxt/Vue
  setTimeout(() => {
    if (swiper.navigation && swiper.navigation.init) {
      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, 0)
}

function onSlideChange() {}

function slidePrev() {
  swiperInstance.value?.slidePrev()
}
function slideNext() {
  swiperInstance.value?.slideNext()
}
</script>


<style scoped>
/* Existing imports unchanged */
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');

.latest-trends {
  background: #fff;
  font-family: 'Varta', sans-serif;
  max-width: auto;
  margin: 0 auto;
  padding: 60px 0 0 0;
  justify-content: center;
  align-items: center;
}
.top-row {
  display: flex;
  justify-content: space-between;   
  align-items: center; 
  margin-bottom: 54px;
  gap: 24px;
  padding: 0 0 0 8%;
  width: 80%;
}
.heading h2 {
  font-size: 46px;
  color: #121212;
  margin-bottom: 12px;
  font-family: 'Merriweather', Light;
  font-weight: 300;
  line-height: 40px;
  letter-spacing: -0.3px;
}
.heading p {
  font-family: 'Varta', sans-serif;
  font-size: 20px;
  color: #7b6b64;
  margin-bottom: 18px;
}
.learn-link {
  font-size: 17px;
  color: #A06056;
  font-weight: 700;
  text-decoration: none;
  font-family: 'Varta', sans-serif;
  letter-spacing: 0.3px;
  line-height: 25px;
}
.newsletter {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 6px;
}
.newsletter input {
  padding: 13px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  min-width: 230px;
  aspect-ratio: 296/30;
}
.newsletter button {
  padding: 13px 30px;
  background-color: #4e3c36;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 17px;
  font-family: 'Varta', sans-serif;
  cursor: pointer;
  transition: background .15s;
  aspect-ratio: 143/50;
}
.newsletter button:hover { background: #6a5347; }

.gallery-inspiration-row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 64px;
  padding: 0 0 0 8%;
}
.gallery-wrap {
  width: 100%;
  max-width: 95vw;
  min-width: 0;
  margin: 0 auto;
}
.trend-image {
  overflow: hidden;
  background: #eee;
  aspect-ratio: 458/550;
}
.trend-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  display: block;
}
.arrow {
  position: relative;
  transform: translateY(-50%);
  background: white;
  border: 1px solid #a87d70;
  color: #a87d70;
  width: 44px;
  height: 44px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  transition: background .2s, color .2s;
  z-index: 10;
}
.arrow:hover {
  background: #f4efe9;
  color: #664e44;
}
.arrow.next {
  right: 0;
}
.arrow[disabled] {
  opacity: 0.3;
  cursor: not-allowed;
}
.arrow:hover:not([disabled]) {
  background: #f4efe9;
  color: #664e44;
}
.pagination.custom-pagination {
  margin-left: 10px;
  font-size: 19px;
  color: #a87d70;
  font-family: 'Varta', sans-serif;
  opacity: 0.87;
  letter-spacing: 1px;
}
.inspirations {
  flex: 1;
  display: flex;
  margin-left: 8%;
  justify-content: center;
  align-items: top;
}
.inspirations .ins-h3 {
  font-size: 45px;
  color: #534B42;
  font-family: 'Merriweather', serif;
  font-weight: 300;
  letter-spacing: -0.3px;
  width: 30%;
}
.inspirations .ins-p {
  font-size: 19px;
  color: #706458;              
  -webkit-text-stroke: 1px #000;
  line-height: 1.5;
  width: 30%;
  margin: 1%;
}
.inspirations .ins-div {
  display: flex;
  justify-content: center;
  align-items:top;
  gap: 20px;
  width: 40%;
  margin: 2%;
  padding: 0%;
}

/* MOBILE RESPONSIVE */
@media (max-width: 600px) {
  .desktop-only { display: none !important; }
  .mobile-only { display: block !important; }

  .latest-trends {
    padding: 32px 0 0 0;
  }
  .top-row {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 5vw;
    margin-bottom: 30px;
    width: 90%;
    gap: 18px;
  }
  .heading h2 {
    font-size: 35px;
    margin-bottom: 12px;
    letter-spacing: -0.3px;
    line-height: 40px;
    color: #121212;
    font-family: 'Merriweather', Light;
    font-weight: 300;
  }
  .heading p {
    font-size: 18px;
    margin-bottom: 15px;
    line-height: 25px;
    color: #706458;
    font-family: 'Varta', sans-serif;
    font-weight: 500;
  }

  .newsletter {
    flex-direction: column;
    
    align-items: stretch;
    width: 100%;
    gap: 0;
  }


  .gallery-inspiration-row {
    flex-direction: column;
    gap: 0;
    padding: 0 0 0 0;
    width: 100%;
  }
  .gallery-wrap {
    width: 100vw;
    max-width: 100vw;
    padding: 0 0;
    margin: 0;
  }
  .trend-image {
    aspect-ratio: 1/1;
    min-height: 0;
    height: auto;
    max-height: 280px;
  }
  .trend-image img {
    width: 100%;
    object-fit: cover;
    border-radius: 4px;
  }



  .inspirations-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 12px;
    width: 100%;
    margin-top: 16px;
    margin-bottom: 0;
  }
  .inspirations-image-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    /* Fix label under image */
    margin-bottom: 0;
    aspect-ratio: 145.5/210;
  }
  .inspirations-image-wrap img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    box-shadow: 0 1px 8px rgba(40,30,15,0.04);
    margin-bottom: 4px;
    background: #eee;
    aspect-ratio: 145.5/175;
    margin-bottom: 12%;

  }
  .inspirations-image-label {
    font-size: 15px;
    margin-top: 0;
    color: #181818;
    font-family: 'Varta', sans-serif;
    line-height: 20px;
    padding-left: 1px;
    font-weight: 700;
  }
  .mobile-inspirations-section {
    padding: 0 18px 32px 18px;
    width: 100%;
    max-width: 460px;
    margin: 0 auto;
  }
  .mobile-inspirations-title {
    font-size: 35px;
    font-family: 'Merriweather', serif;
    color: #534B42;
    font-weight: 500;
    margin-top: 64px;
    margin-bottom: 20px;
    line-height: 40px;
    letter-spacing: -0.3px;
  }
  .mobile-inspirations-desc {
    font-size: 18px;
    line-height: 25px;
    color: #706458;
    margin: 0 0 30px 0;
    font-family: 'Varta', sans-serif;
  }

  /* Make the "Subscribe" button more like mockup */
  .newsletter button {
    background: #534B42;
    color: #fff;
    letter-spacing: 0.05em;
    font-size: 18px;
    font-family: 'Varta', sans-serif;
    font-weight: 600;
    padding: 13px 0;
    border-radius: 0;
    margin-top: 6px;
    box-shadow: none;
    border: none;
    transition: background 0.15s;
      aspect-ratio: 290/50;
      width: 90%;

  }
  .newsletter button:hover {
    background: #7a685a;
  }
  .newsletter input {
    position: relative;
    background: #fcf9f7;
    border: none;
    border-radius: 0;
    color: #706458;
    font-size: 16px;
    margin-bottom: 11px;
    box-shadow: none;
    
  }

  /* Learn more link style */
  .learn-link {
    color: #A06056;
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 16px;
    letter-spacing: 0.3px;
    display: block;
  }
}
/* Hide mobile by default, show on mobile only */
.mobile-only { display: none; }

</style>
