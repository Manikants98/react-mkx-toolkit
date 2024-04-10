import { useEffect, useState } from "react";
import { Location } from "./index.d";

/**
 * Represents a location object.
 * @interface
 * @property {number} latitude - The latitude coordinate.
 * @property {number} longitude - The longitude coordinate.
 * @property {object} address - Address information associated with the location.
 * @property {string} display_name - A human-readable representation of the location.
 */

/**
 * A hook to retrieve the current location of the user.
 * @returns {Location} The current location if available, otherwise null.
 */
const useCurrentLocation = (): Location => {
  const [location, setLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
    address: {},
    display_name: "",
  });

  const { latitude, longitude, address, display_name }: Location = location;

  useEffect(() => {
    /**
     * Retrieves the current location of the user.
     * @async
     * @returns {Promise<void>} A Promise that resolves when the location is retrieved.
     */
    const getCurrentLocation = async (): Promise<void> => {
      try {
        if (!("geolocation" in navigator)) {
          throw new Error("Geolocation is not supported by your browser.");
        }
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          }
        );
        const { latitude, longitude } = position.coords;
        const { address, display_name } = await getLocationString(
          latitude,
          longitude
        );
        setLocation({ latitude, longitude, address, display_name });
      } catch (error) {
        console.error("Error getting current location:", error);
        setLocation({
          latitude: 0,
          longitude: 0,
          address: {},
          display_name: "",
        });
      }
    };
    getCurrentLocation();
  }, []);

  return { latitude, longitude, address, display_name };
};

/**
 * Retrieves the location string for a given latitude and longitude using reverse geocoding.
 * @param {number} latitude The latitude coordinate.
 * @param {number} longitude The longitude coordinate.
 * @returns {Promise<Location>} A Promise that resolves to the location object.
 */
const getLocationString = async (
  latitude: number,
  longitude: number
): Promise<Location> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    const { address, display_name } = await response.json();
    return { address, display_name, latitude, longitude };
  } catch (error) {
    console.error("Error fetching location data:", error);
    return { address: null, display_name: null, latitude, longitude };
  }
};

export default useCurrentLocation;
