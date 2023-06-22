export const WINDOW_RESIZED = "WINDOW_RESIZED";
export const MOUSE_DOWN = "MOUSE_PRESSED";
export const MOUSE_UP = "MOUSE_RELEASED";
import * as appActionTypes from "../../../app/actions/types";

export default [
  WINDOW_RESIZED,
  MOUSE_DOWN,
  MOUSE_UP,
  ...Object.values(appActionTypes).filter(type => typeof type === "string")
];
