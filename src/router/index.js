import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Rules from '../views/Rules.vue';
import CharacterCreator from '../views/CharacterCreator.vue';
import Lore from '../views/Lore.vue';
import ClassPage from '../views/ClassPage.vue';

const routes = [
  { path: '/', component: Home, meta: { title: 'Friends & Foes - Home' } },
  { path: '/rules', component: Rules, meta: { title: 'Friends & Foes - Rules' } },
  { path: '/character-creator', component: CharacterCreator, meta: { title: 'Friends & Foes - Character Creator' } },
  { path: '/lore', component: Lore, meta: { title: 'Friends & Foes - Lore' } },
  {path: '/class/:className', component: ClassPage , meta: { title: 'Friends & Foes - Class Page' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to set the title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Friends & Foes';
  next();
});

export default router;
