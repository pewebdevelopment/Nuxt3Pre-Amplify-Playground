import paper from "paper";
import history from "../history";
import { createLayer } from "../shared";
import { DrawAction } from "../action";
import { useWhiteboardStore } from "@/stores/whiteboard";

const whiteboardStore = useWhiteboardStore();

let local = {
  path: null,
  group: null,
};

function onMouseDown(event) {
  let layer = createLayer();
  local.path = new paper.Path();
  local.path.strokeColor = whiteboardStore.toolArgs.color;
  local.path.strokeWidth = whiteboardStore.toolArgs.size;
  local.path.add(event.point);

  local.group = new paper.Group({
    children: [local.path],
    layer: layer,
  });
  local.group.addChild(
    new paper.Shape.Ellipse({
      layer: layer,
      center: event.point,
      strokeColor: whiteboardStore.toolArgs.color,
      fillColor: whiteboardStore.toolArgs.color,
      radius: whiteboardStore.toolArgs.size / 2,
    })
  );
  layer.addChild(local.group);
}

function onMouseDrag(event) {
  if (!local.path) return;
  local.path.add(event.point);
  local.path.selected = true;
}

function onMouseUp(event) {
  local.path.add(event.point);
  local.path.simplify();
  const action = new DrawAction({
    layer: local.path.layer.name,
    tool: whiteboardStore.tool,
    points: local.path.segments.map((seg) => {
      return {
        x: seg._point._x,
        y: seg._point._y,
      };
    }),
  });

  history.add(action);

  local.path.selected = false;
  local.path = null;
  local.group = null;
}

export const tool = new paper.Tool();
tool.onMouseDown = onMouseDown;
tool.onMouseDrag = onMouseDrag;
tool.onMouseUp = onMouseUp;
