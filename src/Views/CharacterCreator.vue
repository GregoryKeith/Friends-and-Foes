<template>
  <h1>Select Your Class</h1>
    <div>
      
      <div class="classes">
      <div>
      <router-link :to="`/class/rogue`">Rogue
      <img src="/src/assets/fnf_Rogue.webp" alt="placeholder" /></router-link>
      </div>
      <div>
      <router-link :to="`/class/ranger`">Ranger
      <img src="/src/assets/fnf_ranger.jpg" alt="placeholder" /></router-link>
      </div>
      <div>
      <router-link :to="`/class/warrior`">Warrior
      <img src="/src/assets/fnf_Warriors.webp" alt="placeholder" /></router-link>
      </div>
      <div>
      <router-link :to="`/class/knight`">Knight
      <img src="/src/assets/fnf_Knights.webp" alt="placeholder" /></router-link>
      </div>
      <div>
      <router-link :to="`/class/wizard`">Wizard
      <img src="/src/assets/fnf_Wizards.webp" alt="placeholder" /></router-link>
      </div>
      <div>
      <router-link :to="`/class/oracle`">Oracle
      <img src="/src/assets/fnf_Oracles.webp" alt="placeholder" /></router-link>
      </div>
        
      </div>
  
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return{};
      
    },
  };
  </script>
  
  <style>
  h1 {
    text-align: center;
    margin-bottom: 10px;
  }
  .classes {
  display: grid;
  
  grid-template-columns: repeat(6, 150px); 
  justify-content: center;
  gap: 10px; 
  margin: 0 auto;
}

.classes div {
  margin: 0;
  perspective: 1000px;
}

.classes img {
  width: 150px;
  height: 450px;
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.classes img:hover {
  transform: scale(1.1); /* Scale up the image */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Add shadow on hover */
}
</style>
  