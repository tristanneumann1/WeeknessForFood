<template>
  <li class="recipe">
    <div class="recipe-outer">
      <div class="recipe-inner">
        <div class="column-1">
          <img :src="recipe.img" :alt="recipe.name + ' pic'" class="recipe-img" @click="toggleDropDown">
        </div>
        <div class="column-2">
          <span class="recipe-title" @click="toggleDropDown">{{ recipe.name }}:</span>
          <span class="recipe-author">{{ recipe.author }}</span>
        </div>
        <ul class="column-3">
          <li v-for="tag in tags3(recipe)" :key="tag" class="li-tag">
            <span class="tag">{{ tag }}</span>
          </li>
        </ul>
        <div class="column-4">
          <div class="prep-time">
            {{ (recipe.over1H)? '&gt;60min' : '&lt;60min' }}
          </div>
          <add-to-cart :recipe="recipe" :for-persons-state="{ forPersons, addPerson, removePerson, initiallyFor: recipe.people }"/>
        </div>
      </div>
      <transition name="drop-down">
        <recipe-drop-down v-if="dropDown" :recipe="recipe" :for-persons="forPersons"/>
      </transition>
    </div>
  </li>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
import AddToCart from './AddToCart.vue';
import RecipeDropDown from './RecipeDropDown.vue';

export default {
  components: {
    AddToCart,
    RecipeDropDown
  },
  props: {
    recipe: {
      type: Object,
      default() {
        return {
          id: -1,
          name: 'Recipe Missing'
        };
      }
    }
  },
  data() {
    return {
      dropDown: false,
      forPersons: this.recipe.people
    };
  },
  computed: {
    faTime() {
      return fas.faClock;
    },
    faDollarSign() {
      return fas.faDollarSign;
    },
    faBookmark() {
      return fas.faBookmark;
    }
  },
  methods: {
    tags3(recipe) {
      return recipe.tags.slice(0, 3);
    },
    toggleDropDown() {
      this.dropDown = !this.dropDown;
    },
    addPerson() {
      if (this.forPersons < 20) {
        this.forPersons++;
      }
    },
    removePerson() {
      if (this.forPersons > 1) {
        this.forPersons--;
      }
    }
  }
};
</script>

<style scoped>
.recipe {
  width: 50%;
}

.recipe-outer {
  display: flex;
  flex-direction: column;
  /* margin: 1em;
  padding: 0;
  background-color: rgb(163, 225, 280);
  box-shadow: 3px 3px 2px grey; */
}

.recipe-inner {
  display: flex;
  height: 8em;
  margin: 1em;
  margin-bottom: 0;
  padding: 0;
  background-color: rgb(163, 225, 280);
  box-shadow: 3px 3px 2px grey;
}

.column-1 {
  display: block;
  flex: 2;
  height: 100%;
  position: relative;
  padding: 0.5em;
}

.recipe-img {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: auto;
  position: absolute;
  box-shadow: 2px 2px 1px grey;
}

.column-2 {
  display: flex;
  flex: 2;
  padding-left: 0.5em;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  font-size: 1.5em;
}

.recipe-title {
  text-decoration: underline;
  font-weight: 700;
  color: red;
}

.recipe-author {
  font-style: italic;
  font-size: 0.8em;
}

.column-3 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin: 0;
  padding: 0;
  list-style: none;
}

.li-tag {
  position: relative;
  margin: 3px;
  padding: 2px;
  border: 1px solid black;
}

.column-4 {
  display: flex;
  justify-content: space-around;
  flex: 1;
  flex-direction: column;
  margin: 0.5em;
}

.drop-down-enter-active .drop-down-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.drop-down-enter-active {
  transform: scaleY(0);
}

.drop-down-leave-active {
  transform: scaleY(10em);
}
</style>
