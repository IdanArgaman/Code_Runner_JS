<template>
  <div class="code-container">
    <div
      v-for="(code, idx) in codes"
      :key="idx"
      class="code-item"
      ref="codeItems"
    >
      <div class="code-item-body">
        <pre
          v-highlightjs="code.toString()"
        ><code class="javascript"></code></pre>
        <div class="output" v-html="results[idx]"></div>
      </div>
      <div>
        <button @click="run(code, idx)">Run</button>
      </div>
    </div>
  </div>
</template>

<script>
import codes from "../assets/code.js";

export default {
  name: "CodeRunner",
  data: function() {
    return {
      codes: codes,
      results: {},
    };
  },
  methods: {
    run(code, idx) {
      const origLog = console.log;
      const component = this;

      component.$set(component.results, idx, "");

      console.log = function(...args) {
        component.results[idx] += args.toString() + "<br/>";
        origLog(...args);
      };

      try {
        new Function(`(${code.toString()})()`)();
      } catch (e) {
        console.log(e);
      }

      console.log = origLog;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.code-item {
  display: flex;
  flex-direction: column;
}

.code-item-body {
  display: flex;
}

.code-item-body pre {
  max-width: 75%;
  min-width: 75%;
}

.code-item-body .output {
  margin: 13px;
  border: 1px inset black;
  padding: 5px;
  flex: 1;
}
</style>
