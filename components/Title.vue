<template>
  <div class="title-outer">
    <div class="title-container">
      <div class="title">
        <h1>A Weekness for food</h1>
      </div>
      <div class="input-group md-form form-sm form-2 pl-0 recipe-search">
        <input
          class="form-control my-0 py-1 red-border"
          type="text"
          placeholder="Search"
          aria-label="Search"
        >
        <div class="input-group-append">
          <span
            id="basic-text1"
            class="input-group-text red lighten-3"
          >
            <fa :icon="faSearch" />
          </span>
        </div>
      </div>
    </div>
    <div class="add-recipe">
      <button>Add Recipe</button>
    </div>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons';
export default {
  computed: {
    faSearch() {
      return fas.faSearch;
    }
  }
};
</script>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title-outer {
  position: relative;
  width: 100%;
  background-color: #ff725d;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 1em;
}

.logo {
  height: 150px;
  width: 150px;
}

.recipe-search {
  width: 40%;
}

.add-recipe {
  position: absolute;
  width: auto;
  z-index: 1;
  margin: 1em;
  right: 0;
  bottom: 0;
}
</style>
