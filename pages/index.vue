<template>
  <section class="container">
    <!-- BODY -->
    <Title />
    <Content />
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Title from '~/components/Title.vue';
import Content from '~/components/Content.vue';

export default {
  components: {
    Logo,
    Title,
    Content
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
