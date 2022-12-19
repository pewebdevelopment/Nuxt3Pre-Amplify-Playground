<template>
  <div>
    <canvas id="canvas-id" resize></canvas>
    <mainPanel></mainPanel>
    <historyPanel></historyPanel>
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
  created() {
    // paper.install(window); // dont use this with created, use it onMounted!
  },

  mounted() {
    if (process.browser) {
      console.log("Process - Browser");
    }
    if (process.client) {
      console.log("Process - Client");
      // paper.install(window);
      // paper.setup(document.getElementById("canvas-id"));
    }

    if (document.getElementById("canvas-id")) {
      // paper.install(window);
      paper.setup(document.getElementById("canvas-id"));

      // Create a Paper.js Path to draw a line into it:
      console.log("Mounted Whiteboard");
      var path = new paper.Path();
      // Give the stroke a color
      path.strokeColor = "black";
      var start = new paper.Point(100, 100);
      // Move to start and draw a line from there
      path.moveTo(start);
      // Note the plus operator on Point objects.
      // PaperScript does that for us, and much more!
      path.lineTo(start + [100, -50]);
    }
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
canvas {
  height: 100vh;
  width: 100%;
  background: #fdffff;
}
</style>
