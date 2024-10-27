<template>
  <div>
    <h1>Game Rules</h1>

    <!-- YouTube How to Play Video -->
    <iframe width="560" height="315" src="https://www.youtube.com/embed/E1riUEGAAHU" title="YouTube video player"
      frameborder="0" allowfullscreen></iframe>

    <div class="rules">
      <div>
        <h2>Quick Start Rules Download</h2>
        <a href="/path/to/quick-start.pdf" target="_blank">Download Quick Start Rules</a>
      </div>
      <div>
        <h2>Comprehensive Rules Download</h2>
        <a href="/FnF_Rules.pdf" target="_blank">Download Comprehensive Rules</a>
      </div>
      <!-- New section for Character Cards PDF -->
      <div>
        <h2>Character Cards Download</h2>
        <a href="/FnF_Character_Cards.pdf" target="_blank">Download Character Cards</a>
      </div>
      <!-- New section for Abilities PDF -->
      <div>
        <h2>Abilities Download</h2>
        <a href="/FnF_Ability_Cards.pdf" target="_blank">Download Abilities</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rules",
  // Any other script logic
};
</script>

<style scoped>
/* Your existing styles here */
</style>


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

.rules {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  /* Center the grid */
  margin: 20px auto;

  /* Set a fixed width */
  width: 80%;
  max-width: 1200px;

  /* Align items horizontally and vertically */
  justify-items: center;
  align-items: center;

  /* Padding and styling */
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Style for the anchor tags within .rules */
.rules a {
  display: block;
  width: 100%; /* Make the links take up the full width of their container */
  max-width: 300px; /* Optional: set a max width for the links */
  text-align: center;
  padding: 10px;
  background-color: #746b5c;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

/* Change the background color on hover */
.rules a:hover {
  background-color: #e0b873;
}
</style>
