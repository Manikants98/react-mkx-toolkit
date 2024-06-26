export type KeyType =
  | "Backspace"
  | "Tab"
  | "Enter"
  | "Shift"
  | "Control"
  | "Alt"
  | "CapsLock"
  | "Escape"
  | "Space"
  | "PageUp"
  | "PageDown"
  | "End"
  | "Home"
  | "ArrowLeft"
  | "ArrowUp"
  | "ArrowRight"
  | "ArrowDown"
  | "Insert"
  | "Delete"
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"
  | "Meta"
  | "ContextMenu"
  | "F1"
  | "F2"
  | "F3"
  | "F4"
  | "F5"
  | "F6"
  | "F7"
  | "F8"
  | "F9"
  | "F10"
  | "F11"
  | "F12"
  | "NumLock"
  | "ScrollLock"
  | ";"
  | "="
  | ","
  | "-"
  | "."
  | "/"
  | "`"
  | "["
  | "\\"
  | "]"
  | "'"
  | "Shift"
  | "Control"
  | "Alt"
  | "Meta";
export interface useKeyboardProps {
  key: KeyType | null;
  callback: () => void | null;
}
