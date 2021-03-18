<template>
  <div class="code-container">
    <div
      v-for="(codeItem, idx) in codeItems"
      :key="idx"
      class="code-item"
      ref="codeItems"
    >
      <div class="code-item-body">
        <pre
          v-highlightjs="codeItem.code.toString()"
        ><code class="javascript"></code></pre>
        <div class="output" v-html="results[idx]"></div>
      </div>
      <div>
        <button @click="run(codeItem, idx)"><i class="fas fa-play fa-xs"></i>&nbsp;Run</button>&nbsp;
        <button @click="run(codeItem, idx, true)"><i class="fas fa-bug fa-xs"></i>&nbsp;Debug</button>
      </div>
    </div>
  </div>
</template>

<script>
import codeItems from "../assets/code.js";

export default {
  name: "CodeRunner",
  data: function() {
    return {
      codeItems: codeItems,
      results: {},
    };
  },
  methods: {
    run(codeItem, idx, debug = false) {
      const origLog = console.log;
      const component = this;

      component.$set(component.results, idx, "");

      console.log = function(...args) {
        component.results[idx] += args.toString() + "<br/>";
        origLog(...args);
      };

      try {
        let code = codeItem.code.toString();
        if(debug) {
            const idx = code.indexOf('{');
            code = code.slice(0, idx+1) + '\n\tdebugger;\n' + code.slice(idx + 1);
        }
        new Function(`(${code})()`)();
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
