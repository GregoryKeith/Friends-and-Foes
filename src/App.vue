<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/rules">Rules</router-link></li>
        <li><router-link to="/character-creator">Character Creator</router-link></li>
        <li><router-link to="/lore">Lore</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

import globalStyles from './assets/global.css';

<style>
nav ul {
  display: flex;
  list-style: none;
  padding: 0;
}
nav ul li {
  margin-right: 20px;
}
</style>
