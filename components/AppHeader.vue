<template>
  <section class="hero-root">
    <!-- Desktop/Laptop Layout -->
    <div class="hero-desktop">
      <header class="app-header">
        <div class="header-inner">
          <nav class="nav-links">
            <button class="logo" >antic</button>
            <button class="logoo" @click="scrollTo('products')">Products</button>
            <button class="logoo" @click="scrollTo('rooms')">Rooms</button>
            <button class="logoo" @click="scrollTo('services')">Services</button>
            <button class="logoo" @click="scrollTo('inspirations')">Inspirations</button>
          </nav>
        </div>
        <div class="chat-icon" >
          <img src="/images/Contact.svg" alt="Chat icon" />
        </div>
      </header>
      <div class="left">
        <div class="hero-content">
          <div class="label">HOME DESIGN</div>
          <h1 >Elegance for<br>Interiors &<br>Exteriors</h1>
          <p>We provide everyone with modern,<br>trendy, quality furniture</p>
          <div class="scroll-indicator" @click="scrollTo('rooms')">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19" stroke="currentColor" stroke-width="1.5"/>
              <path d="M25 17L20 22L15 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="/images/hero-lamps.jpg" alt="Copper pendant lamps" />
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="hero-mobile">
      <div class="hero-bg"></div>
      <div class="mobile-header-row">
        <span class="logo garamond">antic</span>
        <button class="menu-btn" aria-label="Open menu">
          <img src="/images/Menu.png" alt="Menu icon" />
        </button>
      </div>
      <div class="hero-mobile-content">
        <span class="label">HOME DESIGN</span>
        <h1 class="garamond">Elegance for<br>Interiors &<br>Exteriors</h1>
        <p>We provide everyone with modern,<br>trendy, quality furniture</p>
        <div class="scroll-indicator" @click="scrollTo('rooms')">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
            <circle cx="22" cy="22" r="20.5" stroke="#fff" stroke-width="2"/>
            <path d="M29 20L22 27L15 20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  const section = document.getElementById(id)
  if (section) section.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@400;700&family=EB+Garamond:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap" rel="stylesheet"');

/* Hide/show per device */
.hero-desktop { display: flex; }
.hero-mobile  { display: none; }

/* ============ DESKTOP ============ */
.hero-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.hero-desktop {
  width: 100vw;
  height: 100vh;
  background: #f4efe9;
  font-family: 'Varta', sans-serif;
  position: relative;
}
.app-header {
  position: absolute;
  top: 38px;
  left: 70px;
  right: 70px;
  /* width: calc(100% - 140px); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
  background: none;
  pointer-events: none;
}
.header-inner {
  display: flex;
  align-items: center;
  gap: 52px;
  pointer-events: auto;
}

.nav-links {
  display: flex;
  gap: 19%;
  margin-left: 16%;

}
.nav-links .logoo {
  background: none;
  border: none;
  font-size: 17px;
  font-family: 'Varta', sans-serif;
  color: #605350;
  opacity: 0.94;
  font-weight: 400;
  cursor: pointer;
  transition: color 0.2s, opacity 0.2s;
  padding: 0;
  pointer-events: auto;
  margin-top: 12px;
}
.nav-links .logo  {
  background: none;
  border: none;
  font-size: 35px;
  font-family: 'Merriweather', serif;
  color: #A06056;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 0%;


}

.nav-links .logoo :hover {
  color: #9d6c5d;
  opacity: 1;
}
.chat-icon {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0,0,0,0.10);
  z-index: 21;
  pointer-events: auto;
}
.left {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 80px;
}
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 120px;
  margin-left: 50px;
}
.hero-content h1 {
  font-family: 'Merriweather', serif;
  font-size: 64px;
  line-height: 80px;
  color: #A06056;
  margin: 0 0 10px 0;
  font-weight: 300;
  letter-spacing: -0.4px;
}
.label {
  color: #A06056;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 26px;
  font-family: 'Varta', sans-serif;
}
.garamond {
  font-family: 'EB Garamond', serif !important;
}
h1.garamond {
  font-size: 64px;
  line-height: 1.13;
  color: #a87d70;
  margin: 0 0 28px 0;
  font-weight: normal;
  letter-spacing: -1px;
}
.hero-content p {
  font-size: 22px;
  color: #706458;
  line-height: 31px;
  margin-bottom: 10px;
  font-family: 'Varta', sans-serif;
}
.scroll-indicator {
  color: #a87d70;
  margin-top: 40px;
  cursor: pointer;
}
.right {
  width: 50%;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ============ MOBILE ============ */
.hero-mobile { display: none; }
@media (max-width: 850px) {
  .hero-desktop { display: none !important; }
  .hero-mobile  { display: flex !important; }
  .hero-mobile {
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    background: url('/images/hero-lamps.jpg') center center/cover no-repeat;
    font-family: 'Varta', sans-serif;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .hero-bg {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: rgba(29,19,12,0.48);
    /* slightly darker for best contrast! */
  }
  .mobile-header-row {
    z-index: 2;
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;


    
  }
  .mobile-header-row .logo {
    color: #fff;
    font-size: 34px;
    font-weight: bold;
    font-family: 'Merriweather', serif;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: 2px;
    margin: 0;
    padding: 0;
    user-select: none;
    z-index: 3;
    margin-left: 5%;
    margin-top: 10%;
  }
  .menu-btn {
    background: none;
    border: none;
    padding: 0;
    outline: none;
    cursor: pointer;
    z-index: 3;
    margin-right: 5%;
    margin-top: 10%;
  }
  .hero-mobile-content {
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: absolute;

    width: 100%;
    transform: translateY(-50%);
  }
  .label {
    color: #fff;
    margin-bottom: 24px;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 700;
    font-family: 'Varta', sans-serif;
  }
  .hero-mobile-content h1 {
    font-family: 'Merriweather', serif;
    color: #fff;
    font-size: 35px;
    font-weight: 300;
    line-height: 40px;
    margin: 0%;
    padding: 0%;
    margin-bottom: 24px;    
    letter-spacing: -0.3px;
  }
  .hero-mobile-content p {
    font-size: 18px;
    line-height: 25px;
    font-family: 'Varta', sans-serif;
    color: #F7F8F9;
    font-weight: 500;
    margin: 0%;
    padding: 0%;
    margin-bottom: 24px;
  }
  .scroll-indicator {
    margin: 0%;
    padding: 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 3;
  }
}

/* Responsive larger mobile */
@media (min-width: 480px) and (max-width: 850px) {
  .hero-mobile-content {
    margin-top: 38vh;
    transform: translateY(-19%);
    padding: 0 32px;
  }
  .garamond, h1.garamond {
    font-size: 37px;
  }
  .hero-mobile-content p {
    font-size: 18px;
  }
}
</style>
