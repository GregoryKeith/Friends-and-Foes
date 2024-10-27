<template>
  <div>
    <!-- <h1>{{ className }}</h1> -->
    <h1 v-if="className === 'ranger'">Ranger</h1>
    <h1 v-if="className === 'rogue'">Rogue</h1>
    <h1 v-if="className === 'warrior'">Warrior</h1>
    <h1 v-if="className === 'knight'">Knight</h1>
    <h1 v-if="className === 'wizard'">Wizard</h1>
    <h1 v-if="className === 'oracle'">Oracle</h1>
    <div>
  <h2>Select Fighting Style</h2>
  <select v-model="selectedFightingStyle">
    <option v-for="style in availableFightingStyles" :key="style" :value="style">{{ style }}</option>
  </select>
  <p>{{ selectedFightingStyleDescription }}</p> <!-- Display description here -->
</div>

    <div>
      <h2>Select Equipment</h2>
      <select v-model="selectedEquipment">
        <option v-for="item in availableEquipment" :key="item" :value="item">{{ item }}</option>
      </select>
    </div>

    

    <div>
      <h2>Abilities</h2>
      <select v-model="selectedAbility">
        <option v-for="ability in availableAbilities" :key="ability" :value="ability">{{ ability }}</option>
      </select>
      <button @click="addAbility">+</button>
      <div v-for="(ability, index) in selectedAbilities" :key="index">
        <span>{{ ability }}</span>
        <button @click="removeAbility(index)">Remove</button>
      </div>
    </div>
    <Stats :className="className" :stats="stats" />
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Stats from '../components/Stats.vue';

export default {
  components: {
    Stats,
  },
    setup() {
    
    const route = useRoute();
    const className = route.params.className; // Get className from route params
    
    const selectedFightingStyle = ref(null);
    const selectedEquipment = ref(null);
    const selectedAbility = ref(null);
    const selectedAbilities = ref([]);

    const styles = {
      rogue: ['Weapon Expert', 'Frenzied', 'Sniper'],
      ranger: ['Sniper', 'Dual Wield', 'Juggernaut'],
      warrior: ['Juggernaut', 'Frenzied', 'Weapon Expert', 'Sentry', 'Sniper', 'Martial Artist'],
      knight: ['Sentry', 'Juggernaut', 'Weapon Expert'],
      wizard: ['Ranged Magic', 'Melee Magic'],
      oracle: ['Juggernaut', 'Martial Artist', 'Ranged Magic', 'Melee Magic'],
    };

    const equipmentOptions = {
      rogue: ['Light Armor', 'Mystic Wrap'],
      ranger: ['Light Armor'],
      warrior: ['Light Armor', 'Heavy Armor'],
      knight: ['Heavy Armor'],
      wizard: ['Mystic Wrap'],
      oracle: ['Heavy Armor', 'Mystic Wrap'],
    };

    const abilities = {
      rogue: ['Scavenge', 'Misdirection', 'Lucky', 'Stealth', 'Poisoned Weapons', 'Mug'],
      ranger: ['Lay of the Land', 'Hunter\'s Mark', 'Trap', 'Healing Spring', 'Ranger’s Harvest', 'Aimed Attack'],
      warrior: ['Imminent Threat', 'Large and Imposing', 'Rage Attack', 'Charge', 'Cleaving Attack', 'Reckless Attack', 'Calculated Attack', 'Throw'],
      knight: ['Cover', 'Defensive Aura', 'Arcane Warding Aura', 'Mighty Aura', 'Heal', 'Courage'],
      wizard: ['Intellect', 'Cunning', 'Confuse', 'Polymorph', 'Teleport', 'Magic Blast', 'Magic Explosion'],
      oracle: ['Drain', 'Primal Blast', 'Mender', 'Cure', 'Resurrect', 'Summon Familiar', 'Summon Elemental', 'Summon Spirit', 'Summon Undead'],
    };

    const availableFightingStyles = computed(() => styles[className] || []);
    const availableEquipment = computed(() => equipmentOptions[className] || []);
    const availableAbilities = computed(() => abilities[className] || []);
    const stats = computed(() => {
      let calculatedStats = {
        armor: 0,
        warding: 0,
        speed: 5,
        health: 5, // Default health starts at 5
        cost: 3,
      };
    
      switch (className.toLowerCase()) {
        case 'knight':
          calculatedStats.warding += 1;
          calculatedStats.health += 1;
          break;
        case 'warrior':
          calculatedStats.health += 2;
          break;
        case 'rogue':
          calculatedStats.health += 1;
          calculatedStats.speed -= 2; 
          break;
        case 'ranger':
          calculatedStats.warding += 1;
          calculatedStats.speed -= 1; 
          break;
        case 'oracle':
          calculatedStats.warding += 2;
          break;
        case 'wizard':
          calculatedStats.warding += 1;
          calculatedStats.speed -= 1; 
          break;
      }
      if (selectedEquipment.value) {
    switch (selectedEquipment.value) {
      case 'Heavy Armor':
        calculatedStats.armor += 2;
        calculatedStats.speed += 1;
        break;
      case 'Light Armor':
        calculatedStats.armor += 1;
        break;
      case 'Mystic Wrap':
        calculatedStats.warding += 1;
        break;
    }

    
  }

  const abilityCostMap = {
  'Scavenge': 0,
  'Misdirection': 1,
  'Lucky': 1,
  'Stealth': 1,
  'Poisoned Weapons': 1,
  'Mug': 1,
  'Lay of the Land': 0,
  'Hunter\'s Mark': 1,
  'Trap': 1,
  'Healing Spring': 1,
  'Ranger’s Harvest': 1,
  'Aimed Attack': 1,
  'Imminent Threat': 0,
  'Large and Imposing': 1,
  'Rage Attack': 1,
  'Charge': 1,
  'Cleaving Attack': 1,
  'Reckless Attack': 1,
  'Calculated Attack': 1,
  'Throw': 1,
  'Cover': 0,
  'Defensive Aura': 1,
  'Arcane Warding Aura': 1,
  'Mighty Aura': 1,
  'Heal': 1,
  'Courage': 1,
  'Intellect': 0,
  'Cunning': 1,
  'Confuse': 1,
  'Polymorph': 1,
  'Teleport': 1,
  'Magic Blast': 1,
  'Magic Explosion': 1,
  'Drain': 1,
  'Primal Blast': 1,
  'Mender': 1,
  'Cure': 1,
  'Resurrect': 0,
  'Summon Familiar': 1,
  'Summon Elemental': 1,
  'Summon Spirit': 1,
  'Summon Undead': 1,
};
calculatedStats.cost += selectedAbilities.value.reduce((totalCost, ability) => {
    return totalCost + (abilityCostMap[ability] ?? 0); // Default to 0 if ability not found
  }, 0);

  return calculatedStats;
});
    const addAbility = () => {
      if (selectedAbility.value && !selectedAbilities.value.includes(selectedAbility.value)) {
        selectedAbilities.value.push(selectedAbility.value);
      }
      selectedAbility.value = null; // Reset the selected ability
    };

    const removeAbility = (index) => {
      selectedAbilities.value.splice(index, 1);
    };

    const fightingStyleDescriptions = {
      'Weapon Expert': '1 action +2 attack 1 damage Counterattack',
      'Frenzied': '1 action +2 attack 1 damage Two Attacks',
      'Juggernaut': '2 action +2 attack 2 damage Advantage on Attacks',
      'Sentry': '1 action +2 attack 1 damage Advantage on Defense',
      'Sniper': '1 action +2 attack 1 damage Ranged Attack',
      'Martial Artist': '1 action +0 attack 1 damage Three Attacks',
      'Ranged Magic': '2 action +2 attack 1 damage Ranged, Magic',
      'Breath Weapon': '2 action +0 attack 1 damage Area Effect, Magic',
    };

    const selectedFightingStyleDescription = computed(() => {
      return fightingStyleDescriptions[selectedFightingStyle.value] || 'Select a fighting style to see its description';
    });

    return {
      className,
      selectedFightingStyle,
      selectedEquipment,
      selectedAbility,
      selectedAbilities,
      availableFightingStyles,
      availableEquipment,
      availableAbilities,
      stats,
      addAbility,
      removeAbility,
      selectedFightingStyleDescription,
    };
  },
};
</script>

<style scoped>
/* General Styles */
body {
  font-family: 'Arial', sans-serif;
  background-color: rgba(255, 255, 255, 0.7); /* Subtle background color */

  margin: 0;
  padding: 0;
  color: #333;
}

/* Container for the content */
div {
  padding: 20px;
  margin: 20px auto;
  max-width: 900px;
  background-color: white;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.7); /* Subtle background color */
}

/* Heading styles */
h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

h2 {
  font-size: 1.8rem;
  color: #555;
  margin-top: 30px;
}

/* Select inputs */
select {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 1.1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.7); /* Subtle background color */
}

/* Ability buttons and lists */
button {
  padding: 10px 20px;
  font-size: 1.1rem;
  color: #fff;
  background-color: #746b5c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #e0b873;
}

button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}

/* Ability list */
.selected-abilities {
  margin-top: 10px;
}

.selected-abilities div {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.7); /* Subtle background color */
  border-radius: 5px;
}

.selected-abilities div span {
  font-size: 1.2rem;
}

/* Responsive design */
@media only screen and (max-width: 768px) {
  div {
    padding: 15px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  select, button {
    font-size: 1rem;
  }
}

</style>

   