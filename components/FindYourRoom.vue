<template>
  <section class="find-room-section" id="rooms">
    <div class="find-room-layout">
      <!-- Top: Title -->
      <div class="find-room-top">
        <h2 class="find-room-title garamond">Find your room</h2>
      </div>
      
      <!-- Content Area -->
      <div class="find-room-content">
        <!-- Left: Description -->
        <div class="find-room-desc-area">
          <div class="find-room-desc">
            Dining room,<br /> bedroom, bathroom<br />
            or office. Find what<br /> you need
          </div>
          
        </div>
        
        <!-- Right: Cards -->
        <div class="find-room-cards">
          <div
            v-for="(room, i) in currentRooms"
            :key="room.name"
            class="room-img-wrap"
          >
            <img :src="room.image" :alt="room.name" />
            <div class="room-img-overlay"><span class="new-label">New arrivals</span></div>
            <span class="room-title">{{ room.name }}</span>
          </div>
        </div>
        
      </div>
      <div class="find-room-pagination">
            <span>{{ formattedIndex }} / {{ formattedTotal }}</span>
            <button @click="nextPage">
              Next<img src="/images/Right.svg" class="arrow" alt="t" />

            </button>
          </div>
    </div>
    <!-- MOBILE-ONLY block -->
    <div class="find-room-mobile">
      <h2 class="find-room-title-mobile">Find your room</h2>
      <div class="find-room-desc-mobile">
        Dining room, bedroom, bathroom or office. Find what you need
      </div>
      <div class="room-img-mobile-wrap">
        <div class="room-img-wrap-mobile">
          <img :src="rooms[page].image" :alt="rooms[page].name" />
          <div class="room-img-overlay-mobile"></div><span class="new-label-mobile">New arrivals</span></div>
          <span class="room-title-mobile">{{ rooms[page].name }}</span>
        </div>
      <div class="find-room-pagination-mobile">
        <button @click="nextPage" class="next-mobile">
          Next <img src="/images/Right.svg" alt="Next" class="arrow-mobile" />
        </button>
        <span class="page-count-mobile">{{ formattedIndex }} / {{ formattedTotal }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const rooms = [
  { name: 'Bedroom', image: '/images/bedroom.jpg' },
  { name: 'Living room', image: '/images/living-room.jpg' },
  { name: 'Office', image: '/images/office.jpg' },
  { name: 'Dining room', image: '/images/dining.jpg' },
]

const pageSize = 2
const page = ref(0)
const totalPages = Math.ceil(rooms.length / pageSize)
const formattedIndex = computed(() =>
  (page.value + 1).toString().padStart(2, '0')
)
const formattedTotal = computed(() =>
  totalPages.toString().padStart(2, '0')
)

const currentRooms = computed(() =>
  rooms.slice(page.value * pageSize, page.value * pageSize + pageSize)
)

function nextPage() {
  if (page.value < totalPages - 1) {
    page.value++
  } else {
    page.value = 0
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet"');


.find-room-section {
  width: 100%;
  background: #f4efe9;
  padding: 80px 0 80px 0;
  font-family: 'Varta', sans-serif;
}

.find-room-layout {
  width: 100%;
  margin: 0 auto;
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
}
.room-img-overlay {
  width:auto;
aspect-ratio: 197/350;


}

.find-room-top {
  margin-bottom: 70px;
}


.find-room-title {
  
  font-size: 65px;
  color: #706458;
  font-family: 'Merriweather', serif;
  font-weight: 300;
  line-height: 60px;
  letter-spacing: -0.6px;
  margin: 0;
  margin-left: 8%;

}

.find-room-content {
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-left: 8%;
  width: 80%;
}

.find-room-desc-area {
  margin-right: 7%;
}

.find-room-desc {
  font-size: 18px;
  color: #8a7a73;
  line-height: 1.5;
  margin-bottom: 180px;
  
}

.find-room-pagination {
  color: #a87d70;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 3%;
  margin-left: 8%;
  width: 360px;
  justify-content: space-between;
}

.find-room-pagination span {
  opacity: 90%;
  color: #706458;
  font-family: 'Varta', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 18px;

}

.find-room-pagination button {
  background: none;
  border: none;
  color: #a87d70;
  font-size: 25px;
  cursor: pointer;
  font-family: 'Karla' ;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.2s;
}

.find-room-pagination button:hover {
  color: #4e3c36;
}

.arrow {
  font-size: 22px;
  position: relative;
  top: 1px;
  left: 5px;
}

.find-room-cards {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-grow: 1;
}

.room-img-wrap {
  position: relative;
  flex: 1;
  overflow: hidden;
  background: #f4efe9;
  display: flex;
  align-items: flex-end;
  aspect-ratio: 458/350;

}

.room-img-wrap img {
  width: auto;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 261/350;

}

.new-label {
  position: absolute;
  top: 0%;
  right: 20%;
  color: #91796e;
  font-size: 18px;
  font-family: 'Varta', sans-serif;
  font-weight: 500;
  z-index: 2;
}

.room-title {
  position: absolute;
  left: 32%;
  bottom: 45%;
  color: #A06056;
  font-size: 55px;
  font-family: 'Merriweather', serif !important;
  font-weight: normal;
  line-height: 1;
  letter-spacing: -1px;
  z-index: 2;
  text-shadow: 0 1px 4px rgba(245, 234, 225, 0.1);
  width: max-content;
  
}

/* Responsive */
/* Hide mobile block on desktop by default */
.find-room-mobile {
  display: none;
}

/* MOBILE DESIGN ONLY */
@media (max-width: 600px) {
  /* Hide desktop layout */
  .find-room-layout,
  .find-room-top,
  .find-room-content,
  .find-room-cards,
  .room-img-wrap,
  .find-room-pagination {
    display: none !important;
  }

  .find-room-mobile {
    position: relative;
    display: flex ;
    flex-direction: column;
    align-items: flex-start;
    background: #f4efe9;
    width: 100%;
    padding: 0 18px;
    max-width: 430px;
    margin: 0 auto;
  }
  .room-img-overlay-mobile {
    position: relative;
  width:auto;
aspect-ratio: 197/350;


}
.room-img-wrap-mobile {
    position: relative;
  flex: 1;
  overflow: hidden;
  background: #f4efe9;
  display: flex;
  align-items: flex-end;
  aspect-ratio: 458/350;
}
  .find-room-title-mobile {
    position: relative;
    font-size: 35px;
    color: #534b42;
    font-family: 'Merriweather', serif;
    font-weight: 300;
    margin-top: 25px;
    margin-bottom: 10px;
    letter-spacing: -0.3px;
    line-height: 40px;
  }
  .find-room-desc-mobile {
    color: #8a7a73;
    font-size: 17px;
    line-height: 1.48;
    margin-bottom: 19px;
    font-family: 'Varta', sans-serif;
    font-weight: 400;
    max-width: 90vw;
  }
  .room-img-mobile-wrap {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-grow: 1;
  width: 100%;
  }
  .room-img-mobile-wrap img {
    
 width: auto;
  height: 100%;
  object-fit: cover;
  display: block;
  aspect-ratio: 261/350;
  }

  .new-label-mobile {
    position: absolute;
    top: 0px;
    right: 10%;
    color: #91796e;
    font-size: 18px;
    font-family: 'Varta', sans-serif;
    opacity: 0.85;
    z-index: 2;

  }
  .room-title-mobile {
  position: absolute;
  text-align: center;
  top: 55%;
  left: 35%;
  color: #A06056;
  font-size: 35px;
  font-family: 'Merriweather', serif ;
  font-weight: 300;

  }
  .find-room-pagination-mobile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 24px;
    font-family: 'Varta', sans-serif;
  }
  .next-mobile {
    color: #a06056;
    font-weight: 700;
    font-size: 20px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 3px;
    letter-spacing: 0.3px;
    cursor: pointer;
    font-family: 'Karla', sans-serif;
    margin-left: 2px;
  }
  .arrow-mobile {
    width: 18px;
    height: 18px;
    margin-left: 1.5px;
    position: relative;
    top: 1px;
  }
  .page-count-mobile {
    color: #b5a798;
    font-size: 18px;
    font-family: 'Varta', sans-serif;
    font-weight: 400;
    opacity: 1;
    margin-right: 1.5px;
  }
}

</style>