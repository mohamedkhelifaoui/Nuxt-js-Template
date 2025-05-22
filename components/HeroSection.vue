<template>
  <section class="hero-section">
    <div class="left">
    <header class="app-header">
        <div class="logo">antic</div>
        <nav class="nav-links">
        <a href="#">Products</a>
        <a href="#">Rooms</a>
        <a href="#">Services</a>
        <a href="#">Inspirations</a>
        </nav>
    </header>

      <div class="hero-text">
        <small>HOME DESIGN</small>
        <h1>Elegance for<br>Interiors &<br>Exteriors</h1>
        <p>We provide everyone with modern,<br>trendy, quality furniture</p>
        <div class="scroll-indicator">⌄</div>
      </div>
    </div>

    <div class="right">
      <img src="/images/hero-lamps.jpg" alt="Lamps" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  height: 100vh;
  background-color: #f5f0eb;
  font-family: 'Georgia', serif;
}

.left {
  width: 50%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 28px;
  font-weight: bold;
  color: #7e4e42;
}

nav a {
  margin-left: 25px;
  text-decoration: none;
  color: #4a3c39;
  font-weight: 500;
  font-size: 15px;
}

.hero-text small {
  color: #b2786c;
  font-size: 12px;
  letter-spacing: 1px;
}

.hero-text h1 {
  color: #7e4e42;
  font-size: 48px;
  margin: 20px 0;
  line-height: 1.2;
}

.hero-text p {
  color: #4a3c39;
  font-size: 16px;
  margin-bottom: 30px;
}

.scroll-indicator {
  font-size: 24px;
  color: #7e4e42;
}
.right {
  width: 50%;
  overflow: hidden;
}

.right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
