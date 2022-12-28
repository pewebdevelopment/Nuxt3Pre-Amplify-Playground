<template>
  <div>
    <canvas id="canvas-id" resize></canvas>
    <div id="panels-container" class="flex flex-col gap-5">
      <mainPanel /> <historyPanel />
    </div>
  </div>
</template>

<script>
import paper from "paper";
import MainPanel from "./panel/MainPanel";
import HistoryPanel from "./panel/HistoryPanel";

export default {
  components: {
    mainPanel: MainPanel,
    historyPanel: HistoryPanel,
  },
  created() {},

  mounted() {
    const runtimeConfig = useRuntimeConfig();
    console.log("RunTimeConfig:", runtimeConfig.isClient);

    if (runtimeConfig.isClient) {
      paper.setup(document.getElementById("canvas-id"));
    }
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
canvas {
  height: 100vh;
  width: 100%;
  background: #050311;
}
</style>
