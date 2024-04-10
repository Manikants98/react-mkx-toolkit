/**
 * Generates an array of numbers in increasing order with a specified start and end value.
 * @param start - The starting value of the array.
 * @param end - The ending value of the array (exclusive).
 * @returns The array of numbers in increasing order.
 */
const useRandomArray = (start: number, end: number): number[] => {
  return Array.from({ length: end - start }, (_, i) => start + i);
};

export default useRandomArray;
