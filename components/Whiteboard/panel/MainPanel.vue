<template>
  <div class="mainPanel">
    <!-- Actions panel -->
    <div class="actionsPanel">
      <!-- Pencil -->

      <panelToolIcon
        @click.native="
          togglePencilSettings();
          setWhiteboardTool('pencil');
        "
        :toolColor="toolColor"
        :isActive="tool === 'pencil'"
        icon="pencil-alt"
      />
      <!-- Brush -->
      <panelToolIcon
        @click.native="
          toggleBrushSettings();
          setWhiteboardTool('brush');
        "
        :toolColor="toolColor"
        :isActive="tool === 'brush'"
        icon="paint-brush"
      />

      <!-- Eraser select -->
      <panelToolIcon
        @click.native="
          toggleEraserSettings();
          setWhiteboardTool('eraser');
        "
        toolColor="#133337"
        :isActive="tool === 'eraser'"
        icon="eraser"
      />
      <!-- Shape select -->
      <panelToolIcon
        @click.native="toggleShapeSettings"
        :toolColor="shapeColor"
        :isActive="
          tool === 'circle' ||
          tool === 'square' ||
          tool === 'triangle' ||
          tool === 'line'
        "
        :icon="activeShape"
      />
    </div>

    <!-- Container_for_the_Tools -->
    <div class="Container_for_the_Tools">
      <!-- Pencil settings -->
      <panelToolSettings v-if="isPencilSettingsOpened">
        <template #settingsColorPicker>
          <!-- ColorPicker -->
          <colorPicker
            :onSelectColor="setToolColor"
            class="settingsColorPicker"
            :colors="colors"
          />
        </template>

        <!-- Slider -->
        <rangeSlider
          :onChange="setToolSize"
          :min="0"
          :max="6"
          :value="toolSize"
          class="settingsSlider"
          slot="slider"
        />
      </panelToolSettings>
      <!-- Brush settings -->
      <panelToolSettings v-if="isBrushSettingsOpened">
        <template #settingsColorPicker>
          <!-- ColorPicker -->
          <colorPicker
            :onSelectColor="setToolColor"
            class="settingsColorPicker"
            :colors="colors"
          />
        </template>

        <!-- Slider -->
        <rangeSlider
          :onChange="setToolSize"
          :min="0"
          :max="6"
          :value="toolSize"
          class="settingsSlider"
          slot="slider"
        />
      </panelToolSettings>

      <!-- Eraser settings -->
      <panelToolSettings v-if="isEraserSettingsOpened">
        <!-- Slider -->
        <rangeSlider
          :onChange="setEraserSize"
          :min="0"
          :max="24"
          :value="eraserSize"
          class="settingsSlider"
          slot="slider"
        />
      </panelToolSettings>
      <!-- Shape settings -->
      <panelToolSettings v-if="isShapeSettingsOpened">
        <!-- SettingsActions -->
        <template class="settingsActions" #settingsActions>
          <!-- Circle select -->
          <panelToolIcon
            @click.native="setWhiteboardTool('circle')"
            :toolColor="shapeColor"
            :isActive="tool === 'circle'"
            icon="circle"
          />
          <!-- Square select -->
          <panelToolIcon
            @click.native="setWhiteboardTool('square')"
            :toolColor="shapeColor"
            :isActive="tool === 'square'"
            icon="square"
          />
          <!-- Triangle select -->
          <panelToolIcon
            @click.native="setWhiteboardTool('triangle')"
            :toolColor="shapeColor"
            :isActive="tool === 'triangle'"
            icon="exclamation-triangle"
          />
          <!-- Line select -->
          <panelToolIcon
            @click.native="setWhiteboardTool('line')"
            :toolColor="shapeColor"
            :isActive="tool === 'line'"
            icon="slash"
          />
        </template>

        <template #settingsColorPicker>
          <!-- ColorPicker -->
          <colorPicker
            :onSelectColor="setShapeColor"
            class="settingsColorPicker"
            :colors="colors"
          />
        </template>

        <template #slider>
          <!-- Slider -->
          <rangeSlider
            :onChange="setShapeSize"
            :min="0"
            :max="6"
            :value="shapeSize"
            class="settingsSlider"
          />
        </template>
      </panelToolSettings>
    </div>
  </div>
</template>

<script>
// import { mapState } from "pinia";
import Tools from "@/components/Whiteboard/tools/tool/tools";
import { useWhiteboardStore } from "@/stores/whiteboard";
import PanelToolIcon from "./PanelToolIcon";
import PanelToolSettings from "./PanelToolSettings";
import ColorPicker from "../ColorPicker";
// import RangeSlider from "../RangeSlider";
// import colorPalette from "../../config/colorPalette.js";

// const whiteboardStore = useWhiteboardStore(); // this is for the composition API

const colorPalette = [
  "#7841CC",
  "#FFD54F",
  "#00C6C2",
  "#FF0000",
  "#EC008C",
  "#6DCFF6",
  "#FBAF5D",
  "#39B54A",
  "#448CCB",
];

export default {
  components: {
    panelToolIcon: PanelToolIcon,
    panelToolSettings: PanelToolSettings,
    // rangeSlider: RangeSlider,
    colorPicker: ColorPicker,
  },
  data() {
    return {
      whiteboardStore: useWhiteboardStore(this.$pinia),

      isPencilSettingsOpened: false,
      isBrushSettingsOpened: false,
      isEraserSettingsOpened: false,
      isShapeSettingsOpened: false,
      colors: colorPalette,
    };
  },
  methods: {
    // Toggle
    // toggleToolSettings() {
    //   this.isToolSettingsOpened = !this.isToolSettingsOpened;
    //   this.isEraserSettingsOpened = false;
    //   this.isShapeSettingsOpened = false;
    // },

    togglePencilSettings() {
      this.isPencilSettingsOpened = !this.isPencilSettingsOpened;
      this.isBrushSettingsOpened = false;
      // this.isToolSettingsOpened = !this.isToolSettingsOpened;
      this.isEraserSettingsOpened = false;
      this.isShapeSettingsOpened = false;
    },

    toggleBrushSettings() {
      this.isBrushSettingsOpened = !this.isBrushSettingsOpened;
      this.isPencilSettingsOpened = false;
      // this.isToolSettingsOpened = !this.isToolSettingsOpened;
      this.isEraserSettingsOpened = false;
      this.isShapeSettingsOpened = false;
    },
    toggleEraserSettings() {
      this.isEraserSettingsOpened = !this.isEraserSettingsOpened;
      this.isBrushSettingsOpened = false;
      this.isPencilSettingsOpened = false;

      this.isShapeSettingsOpened = false;
    },
    toggleShapeSettings() {
      this.isShapeSettingsOpened = !this.isShapeSettingsOpened;
      this.isBrushSettingsOpened = false;
      this.isPencilSettingsOpened = false;
      this.isEraserSettingsOpened = false;
    },
    // Set Color
    setToolColor(color) {
      console.log("Inside SetTool Color");
      this.whiteboardStore.setToolColor(color);
      // this.$store.dispatch("setToolColor", color);
    },
    setShapeColor(color) {
      this.whiteboardStore.setShapeColor(color);
      // this.$store.dispatch("setShapeColor", color);
    },
    // Set size
    setToolSize(size) {
      this.whiteboardStore.setToolSize(size);
      // this.$store.dispatch("setToolSize", size);
    },
    setEraserSize(size) {
      this.whiteboardStore.setEraserSize(size);
      // this.$store.dispatch("setEraserSize", size);
    },
    setShapeSize(size) {
      this.whiteboardStore.setShapeSize(size);
      // this.$store.dispatch("setShapeSize", size);
    },
    // Set tool
    setWhiteboardTool(tool) {
      this.whiteboardStore.setWhiteboardTool(tool);
      // this.$store.dispatch("setWhiteboardTool", tool);
    },
  },
  computed: {
    // Mapping the store via MapStore from Pinia

    // ...mapState(useWhiteboardStore(), ["whiteboardStore"]),

    // Acitve
    activeTool: function () {
      if (this.tool === "pencil") {
        return "pencil-alt";
      } else if (this.tool === "brush") {
        return "paint-brush";
      } else {
        return "pencil-alt";
      }
    },
    activeShape: function () {
      if (this.tool === "cricle") {
        return "circle";
      } else if (this.tool === "square") {
        return "square";
      } else if (this.tool === "triangle") {
        return "exclamation-triangle";
      } else if (this.tool === "line") {
        return "slash";
      } else {
        return "circle";
      }
    },

    tool: function () {
      // return "pencil";
      return this.whiteboardStore.tool;
    },
    // Color
    toolColor: function () {
      // debugger;
      // console.log(this.whiteboardStore);
      return this.whiteboardStore.toolArgs.color;
    },
    shapeColor: function () {
      return this.whiteboardStore.shapeArgs.color;
    },
    // Size
    toolSize: function () {
      return this.whiteboardStore.toolArgs.size;
    },
    eraserSize: function () {
      return this.whiteboardStore.eraserArgs.size;
    },
    shapeSize: function () {
      return this.whiteboardStore.shapeArgs.size;
    },
  },
  mounted() {
    // console.log(Tools.pencil);
    this.whiteboardStore.setWhiteboardTool();
    // this.whiteboardStore.setWhiteboardTool(Tools.pencil);
    console.log(this.whiteboardStore);
    this.setToolSize(3); // This is working to set the ToolSize
  },
};
</script>

<style>
.mainPanel {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 10px;
  left: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 10px 30px 8px rgba(0, 0, 0, 0.4);
}
.mainPanel .actionsPanel .tool:not(:last-child) {
  margin-bottom: 5px;
}
</style>
