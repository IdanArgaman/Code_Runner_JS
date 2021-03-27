<template>
  <div id="app">
    <CodeRunner />
  </div>
</template>

<script>
import CodeRunner from "./components/CoderRunner.vue";

export default {
  name: "CodeRunnerApp",
  components: {
    CodeRunner,
  },
};
</script>

<style>
#app {
}
</style>
