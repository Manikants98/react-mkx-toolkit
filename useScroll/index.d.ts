export interface ScrollOptionsProps {
  behavior?: "auto" | "instant" | "smooth";
  block?: "start" | "center" | "end" | "nearest";
  inline?: "start" | "center" | "end" | "nearest";
}

export interface useScrollProps {
  /**
   * Scrolls the window to the top.
   * @returns {void}
   */
  scrollToTop: () => void;
  /**
   * Scrolls the window to the bottom.
   * @returns {void}
   */
  scrollToBottom: () => void;
  /**
   * Scrolls the window to an element with the specified ID, with customizable options.
   * @param {string} id - The ID of the element to scroll to.
   * @param {ScrollOptionsProps} options - Optional scroll options.
   * @returns {void}
   */
  scrollById: (id: string, options?: ScrollOptionsProps) => void;
}
