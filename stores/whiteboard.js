import { defineStore } from "pinia";

import tools from "@/components/Whiteboard/tools/tool/tools";

const state = () => ({
  tool: null,
  toolArgs: {
    size: 2,
    color: "#000000",
  },
  eraserArgs: {
    size: 2,
    color: "#133337",
  },
  shapeArgs: {
    size: 2,
    color: "#000000",
  },
});

const mutations = {
  //ToolArgs
  SET_TOOL_COLOR(state, toolColor) {
    state.toolArgs.color = toolColor;
  },
  SET_TOOL_SIZE(state, toolSize) {
    state.toolArgs.size = toolSize;
  },
  //EraserArgs
  SET_ERASER_SIZE(state, eraserSize) {
    state.eraserArgs.size = eraserSize;
  },
  SET_ERASER_COLOR(state, eraserColor) {
    state.eraserArgs.color = eraserColor;
  },
  //ShapesArgs
  SET_SHAPE_SIZE(state, shapeSize) {
    state.shapeArgs.size = shapeSize;
  },
  SET_SHAPE_COLOR(state, shapeColor) {
    state.shapeArgs.color = shapeColor;
  },
  //Tool
  SET_WHITEBOARD_TOOL(state, tool) {
    state.tool = tool;
    if (tools[tool]) {
      tools[tool].activate();
    }
  },
};

const actions = {
  //ToolArgs
  setToolColor: (toolColor) => {
    this.toolArgs.color = toolColor;
    // commit("SET_TOOL_COLOR", toolColor);
  },
  setToolSize: (toolSize) => {
    this.toolArgs.size = toolSize;
    // commit("SET_TOOL_SIZE", toolSize);
  },
  //Eraser
  setEraserSize: (eraserSize) => {
    this.eraserArgs.size = eraserSize;
    // commit("SET_ERASER_SIZE", eraserSize);
  },
  setEraserColor: (eraserColor) => {
    this.shapeArgs.size = shapeSize;
    this.eraserArgs.color = eraserColor;
    // commit("SET_ERASER_COLOR", eraserColor);
  },
  //ShapeArgs
  setShapeSize: (shapeSize) => {
    this.shapeArgs.size = shapeSize;
    // commit("SET_SHAPE_SIZE", shapeSize);
  },
  setShapeColor: (shapeColor) => {
    this.shapeArgs.color = shapeColor;
    // commit("SET_SHAPE_COLOR", shapeColor);
  },
  //Tool
  setWhiteboardTool: (tool) => {
    this.tool = tool;
    if (tools[tool]) {
      tools[tool].activate();
    }
    // commit("SET_WHITEBOARD_TOOL", tool);
  },
};

const getters = {
  tool() {
    return this.tool;
  },
  toolArgs() {
    return this.toolArgs;
  },
  eraserArgs() {
    return this.eraserArgs;
  },
  shapeArgs() {
    return this.shapeArgs;
  },
};

export const useWhiteboardStore = defineStore("Whiteboard", {
  state,
  getters,
  actions,
});
