import { ScrollOptionsProps, useScrollProps } from "./index.d";
/**
 * Hook to provide scrolling utilities.
 * @returns {useScrollProps} An object containing functions for scrolling.
 */

/**
 * Hook to provide scrolling utilities.
 * @returns {useScrollProps} An object containing functions for scrolling.
 */
function useScroll(): useScrollProps {
  /**
   * Scrolls the window to the top.
   * @returns {void}
   */
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /**
   * Scrolls the window to the bottom.
   * @returns {void}
   */
  const scrollToBottom = (): void => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  /**
   * Scrolls the window to an element with the specified ID, with customizable options.
   * @param {string} id - The ID of the element to scroll to.
   * @param {ScrollOptionsProps} options - Optional scroll options.
   * @returns {void}
   */
  const scrollById = (id: string, options?: ScrollOptionsProps): void => {
    const defaultOptions: ScrollOptionsProps = {
      behavior: "smooth",
      block: "center",
      inline: "center",
    };

    const scrollOptions = { ...defaultOptions, ...options };

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView(scrollOptions);
    } else {
      console.error(`Element with id ${id} not found.`);
    }
  };

  return { scrollToTop, scrollToBottom, scrollById };
}

export default useScroll;
