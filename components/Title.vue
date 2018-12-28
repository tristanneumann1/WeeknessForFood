<template>
  <div class="title-container">
    <div class="title">
      <h1>Pick your recipes, your shopping list writes itself!</h1>
      <img 
        class="logo"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/76ab2e19585305.562dce0bcf645.png"
        alt="weekness for food logo"
      >
    </div>
    <!-- Search form -->
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
    <!-- Filter -->
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
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: beige;
  padding: 1em;
}

.logo {
  height: 150px;
  width: 150px;
}

.recipe-search {
  width: 40%;
}
</style>
