<template>
  <div>
    <div>
      <img
        src="/src/assets/Created_Banner_image.webp"
        alt="Friends and Foes Banner"
        class="banner"
      />
    </div>
    <!-- <h1>Welcome to Friends and Foes</h1>
    <p>This is a game of strategy and skill...</p> -->

    <div class="informationSplash">
      <img src="/src/assets/fnf_cool_battle.jpg" alt="Friends and Foes Logo" />

      <div>
        <h2>Fast-Paced Fun for Every Gaming Night</h2>
        <p>
          Friends and Foes delivers fast-paced action that keeps every player engaged from
          start to finish. With game rounds typically lasting just 25-30 minutes, you can
          easily fit multiple sessions into a single night, making it perfect for
          tournaments or campaigns. Whether you're battling it out in a friendly
          competition or embarking on an epic campaign, Friends and Foes ensures everyone
          gets a chance to play, making it the ideal choice for weekend gaming marathons
          or quick, intense skirmishes.
        </p>
      </div>
      <div>
        <h2>Multiplayer at the Core</h2>
        <p>
          In Friends and Foes, multiplayer isn’t just an optional feature—it’s at the very
          heart of the game. Whether you’re battling in chaotic free-for-alls or
          organizing strategic team showdowns, everyone gets to join the action. No need
          to split into separate groups or wait your turn; Friends and Foes is designed to
          bring everyone together for an immersive, shared experience. The dynamic
          multiplayer gameplay keeps every match fresh and unpredictable, making sure no
          one is left on the sidelines.
        </p>
      </div>
      <img src="/src/assets/Battle2.webp" />
      <img src="/src/assets/Battle.4.webp" />
      <div>
        <h2>Endless Customization, Infinite Strategy</h2>
        <p>
          Friends and Foes offers deep customization that lets you create your perfect
          team. Start by selecting unique classes, then tailor your characters with a
          variety of fighting styles, equipment, and abilities to match your strategy. But
          the real fun begins when you assemble your small team—each choice can open up
          new synergies and strategies, allowing you to experiment and discover powerful
          combinations. With so many options, every match feels fresh, and the
          possibilities for creating your ultimate squad are endless.
        </p>
      </div>
    </div>

    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/E1riUEGAAHU"
        title="YouTube video player"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  // Any other script logic
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 10px;
}
h2 {
  text-align: center;
  margin-bottom: 10px;
}

p {
  text-align: center;
  margin: 10px auto;
}

img {
  display: block;
  margin: 10px auto;
}

iframe {
  display: block;
  margin: 20px auto;
}
.banner {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-height: 250px;
  height: auto;
  
}
.informationSplash {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  /* Center the grid */
  margin: 20px auto;

  /* Set a fixed width */
  width: 80%; /* Or use a fixed width like 800px */
  max-width: 1200px; /* Ensures it doesn't stretch too wide on large screens */
  align-items: center;

  /* Padding and styling */
  padding: 10px;
  
  border-radius: 10px;

  background-color: rgba(255, 255, 255, 0.7); /* Subtle background color */
  border-radius: 10px; /* Rounded edges for the grid container */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}
.informationSplash p {
  max-width: 600px; /* Set a max-width for the <p> to control the width of both text and images */
  margin: 0 auto;
  padding: 10px;
  background-color: rgba(240, 240, 240, 0.8);
  border-radius: 5px;
  text-align: justify;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.informationSplash img {
  width: 100%; /* Forces the image to be the same width as the <p> */
  height: auto; /* Keeps the aspect ratio */
  display: block;
  margin: 10px auto; /* Centers the image */
  border-radius: 5px;
}

</style>
