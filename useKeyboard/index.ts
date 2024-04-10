import { useEffect } from "react";
import { KeyType } from "./index.d";

/**
 * Custom hook to handle keyboard events.
 * @param {KeyType} key - The key to listen for.
 * @param {Function} callback - The callback function to execute when the key is pressed.
 * @returns {void}
 */
const useKeyboard = (key: KeyType, callback: () => void): void => {
  useEffect(() => {
    /**
     * Event handler for keydown event.
     *
     * @param {KeyboardEvent} event - The keyboard event object.
     * @returns {void}
     */
    const handleKeyDown = (event: KeyboardEvent): void => {
      try {
        if (event.key === key) {
          event.preventDefault();
          callback();
        }
      } catch (error) {
        console.error("Error in useKeyboard hook:", error);
      }
    };

    try {
      window.addEventListener("keydown", handleKeyDown);
    } catch (error) {
      console.error("Error adding event listener in useKeyboard hook:", error);
    }
    return () => {
      try {
        window.removeEventListener("keydown", handleKeyDown);
      } catch (error) {
        console.error(
          "Error removing event listener in useKeyboard hook:",
          error
        );
      }
    };
  }, [key, callback]);
};

export default useKeyboard;
