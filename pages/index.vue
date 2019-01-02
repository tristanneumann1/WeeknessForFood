<template>
  <section class="container">
    <Title />
    <Content v-if="this.$store.state.pageDisplay === 1" />
    <AddRecipe v-else />
  </section>
</template>

<script>
import Title from '~/components/Title.vue';
import Content from '~/components/Content.vue';
import AddRecipe from '~/components/AddRecipe.vue';

export default {
  components: {
    Title,
    Content,
    AddRecipe
  }
};
</script>

<style>
body {
  background-color: #fce2c8;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0;
  padding: 0;
  max-width: 100%;
}
</style>
