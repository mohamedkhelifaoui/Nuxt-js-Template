<template>
  <footer class="app-footer">
    <div class="footer-main">
      <!-- Footer Grid -->
      <div class="footer-grid">
        <div class="footer-logo ">antic</div>
        <div class="footer-col">
          <h4>Products</h4>
          <ul>
            <li>Furniture</li>
            <li>Decoration</li>
            <li>Storage</li>
            <li>Baby and child</li>
            <li>Connected home</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Rooms</h4>
          <ul>
            <li>Living room</li>
            <li>Dining room</li>
            <li>Cooked</li>
            <li>Bedroom</li>
            <li>Bathroom</li>
            <li>Office</li>
            <li>Laundry</li>
            <li>Garage</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Click and collect</li>
            <li>Conception</li>
            <li>Installation</li>
            <li>Advices</li>
            <li>Gift card</li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>About</h4>
          <ul>
            <li>Our story</li>
            <li>Our stores</li>
            <li>Our partners</li>
          </ul>
        </div>
        <!-- Planet Block -->
        <div class="footer-planet">
          <h4>We respect our planet</h4>
          <img src="/images/planet.jpg" alt="planet" />
          <p>
            We're taking positive steps to reduce our impact on the planet.<br />
            For us, that means retailing responsibly.
          </p>
          <a href="#" class="learn-link">Learn more <span>&rsaquo;</span></a>
        </div>
      </div>
      
      <!-- Social Media Icons -->
      <div class="social-media-icons">
        <a href="#"><img src="/images/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="/images/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
        <a href="#"><img src="/images/instagram.png" alt="Instagram" /></a>
      </div>
      
      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="footer-bottom-left">
          &copy; 2021 Agence Dnd
        </div>
        <div class="footer-bottom-right">
          <a href="#">Privacy policy</a>
          <a href="#">Term of service</a>
          <a href="#">Language</a>
        </div>
      </div>
      <div class="footer-agence-dnd">
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy policy</a>
          <a href="#" class="footer-link">Term of service</a>
        </div>
        <div class="footer-lang">
          Language
        </div>
        <div class="footer-copyright">
          © 2021 Agence Dnd
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@400;700&family=EB+Garamond:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');


.footer-agence-dnd  { display: none; }

.app-footer {
  width: 100%;
  background: #f4efe9;
  font-family: 'Varta', sans-serif;
  color: #4e3c36;
  padding: 0;
}

.footer-main {
  max-width: 100%;
  margin: 0 auto;
  padding: 3% 8% 3% 8%;
  /* padding-top: 48px; */
  display: flex;
  flex-direction: column;
}

.footer-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 38px;
  align-items: flex-start;
  width: 100%;
  /* padding: 0 54px 0 84px; */
  margin-bottom: 34px;
}

.footer-logo {
  font-family: 'Merriweather', Bold;
  font-size: 34px;
  font-weight: 700;
  color: #534B42;
  letter-spacing: -1px;
  user-select: none;
  margin-top: 1.5%;
}
.footer-col {
  text-align: left;
}

.footer-col h4 {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 17px;
  color: #534B42;
  font-family: 'Varta', sans-serif;
  font-weight: 600; 
  letter-spacing: -0.2px;
}
.footer-col ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.footer-col li {
  font-size: 18px;
  color: #706458;
  margin-bottom: 9px;
  cursor: pointer;
  font-family: 'Varta', sans-serif;
  font-weight: 400;
  transition: color 0.13s;
}
.footer-col li:hover {
  color: #a87d70;
}

.footer-planet {
  min-width: 255px;
  max-width: 290px;
  margin-left: 0;
  margin-top: 0;
  text-align: left;
  padding-left: 16px;
}
.footer-planet h4 {
  font-size: 25px;
  color: #534B42;
  font-family: 'Varta', sans-serif;

  font-weight: 600;
  margin-bottom: 13px;
  Letter-spacing: -0.2px;
}
.footer-planet img {
  width: 100%;
  margin-bottom: 14px;
  object-fit: cover;
  aspect-ratio: 4/3;
  background: #eee;
}
.footer-planet p {
  color: #706458;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 1.48;
  font-family: 'Varta', sans-serif;
}
.learn-link {
  font-size: 16px;
  color: #a87d70;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.2px;
  transition: color 0.13s;
}
.learn-link span {
  font-size: 18px;
  vertical-align: middle;
}
.learn-link:hover {
  color: #7b5541;
  text-decoration: underline;
}

/* Social Media Icons */
.social-media-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
}

.social-media-icons img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  transition: transform 0.2s ease, filter 0.2s ease;
  cursor: pointer;
}

.social-media-icons img:hover {
  transform: scale(1.1);
  filter: brightness(0.7);
}


/* Bottom Bar */
.footer-bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px 90px 30px; */
  font-size: 18px;
  color: #706458;
  flex-wrap: wrap;
}
.footer-bottom-left {
  flex: 1;
  text-align: left;
  font-size: 18px;
  color: #706458;
  font-family: 'Varta', sans-serif;
  min-width: 220px;
}
.footer-bottom-right {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 16px;
  justify-content: flex-end;
  flex: 1;
  min-width: 250px;
}
.footer-bottom-right a {
  color: #706458;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.13s;
}
.footer-bottom-right a:hover {
  color: #a87d70;
}

/* Responsive */
@media (max-width: 1300px) {
  .footer-grid {
    padding: 0 24px 0 24px;
    grid-template-columns: 110px 1fr 1fr 1fr 1fr 1.4fr;
    gap: 18px;
  }
}
@media (max-width: 1100px) {
  .footer-grid {
    grid-template-columns: 110px 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;
  }
  .footer-planet {
    grid-column: 1/-1;
    margin-left: 0;
    max-width: 450px;
    margin-top: 30px;
    padding-left: 0;
  }
}
@media (max-width: 900px) {
  .footer-bottom { display: none !important; }

  .footer-grid {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 0 2vw;
  }
  .footer-planet {
    max-width: 98vw;
    margin-top: 28px;
  }
  .footer-logo {
    justify-content: center;
    align-self: center;
    margin-bottom: 18px;
  }
  .footer-main {
    padding-top: 22px;
  }

  .social-media-icons {
    margin: 15px 0;
    gap: 15px;
  }
  .footer-agence-dnd {
  background: #f4efe9;       /* Même fond que la page */
  padding: 28px 0 16px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: left;

  gap: 10px;
}

.footer-links {
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-bottom: 4px;
  font-size: 24px;
}

.footer-link {
  color: #8a7a73;
  font-family: 'Varta', sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  opacity: 1;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #706458;
  text-decoration: underline;
}

.footer-lang {
  color: #8a7a73;
  font-family: 'Varta', sans-serif;
  font-size: 20px;
  margin-bottom: 10%;
}

.footer-copyright {
  color: #706458;
  font-family: 'Varta', sans-serif;
  font-size: 20px;
  font-weight: 400;
  opacity: 1;
}

}
</style>