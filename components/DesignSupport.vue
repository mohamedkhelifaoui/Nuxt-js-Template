<template>
  <section class="design-support" id="services">
    <div class="left">
      <h2>
        We stay by your <br />
        side to design <br />
        your projects
      </h2>
      <a href="#" class="more-link">Find out more &rsaquo;</a>
    </div>

    <div class="right">
      <div class="service" v-for="(item, i) in services" :key="i">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Our Advices',
    description:
      'What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.',
  },
  {
    title: 'Click and Collect',
    description:
      'Adapted and contactless. Free from €200 of purchases in stores offering the service.',
  },
  {
    title: 'Conception Service',
    description:
      'Personalized service with an expert advisor for your interior and exterior decoration or layout projects.',
  },
  {
    title: 'Installation Service',
    description:
      'Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Varta:wght@400;700&family=EB+Garamond:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');


.design-support {
  display: flex;
  flex-direction: row;
  gap: 100px;
  padding: 96px 0 84px 8%;
  background: #f4efe9;
  font-family: 'Varta', sans-serif;
}

.left {
  width: 38vw;
  min-width: 350px;
  max-width: 650px;
  margin-right: 28px;
}

.left h2 {
  font-family: 'Merriweather', Light;
  font-size: 60px;
  color: #706458;
  font-weight: normal;
  margin-bottom: 38px;
  letter-spacing: -0.6px;
}

.more-link {
  font-size: 18px;
  color: #A06056;
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 1px;
  transition: color 0.18s;
  font-family: 'Varta', bold;
  Letter-spacing: 0.3px;
}
.more-link:hover {
  color: #7b5541;
  text-decoration: underline;
}

.right {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px 54px;
  min-width: 380px;
  max-width: 800px;
  align-items: flex-start;
  margin-top: 3%;
}

.service h3 {
  color: #A06056;
  font-size: 25px;
  margin-bottom: 5px;
  font-family: 'Varta', semibold;
  font-weight: 600;
  letter-spacing: 0.1px;
}

.service p {
  font-size: 17px;
  color: #706458;
  font-family: 'Varta', sans-serif;
  line-height: 1.6;
  margin-bottom: 0;
  font-weight: 400;
}

@media (max-width: 1100px) {
  .design-support {
    flex-direction: column;
    padding: 52px 18px 44px 24px;
    gap: 48px;
  }
  .left {
    width: 100%;
    min-width: unset;
    max-width: unset;
    margin-right: 0;
  }
  .right {
    grid-template-columns: 1fr;
    min-width: 0;
    max-width: 100%;
    gap: 40px 0;
  }
  .left h2 { font-size: 38px; }
  .service h3 { font-size: 20px; }
  .service p { font-size: 15px; }
}
</style>
