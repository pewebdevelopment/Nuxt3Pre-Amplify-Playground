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
  created() {
    // paper.install(window); // dont use this with created, use it onMounted!
  },

  mounted() {
    if (process.browser) {
      console.log("Process - Browser");
    }

    if (process.client) {
      // paper.install(window);
      paper.setup(document.getElementById("canvas-id"));

      // Create a Paper.js Path to draw a line into it:
      console.log("Mounted Whiteboard from process.client");
      // var path = new paper.Path();
      // Give the stroke a color
      // path.strokeColor = "black";
      // path.strokeWidth = 200;
      // var start = new paper.Point(0, 0);
      // Move to start and draw a line from there
      // path.moveTo(start);
      // Note the plus operator on Point objects.
      // PaperScript does that for us, and much more!
      // path.lineTo(start + [1000, 1000]);
      // path.add();
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
