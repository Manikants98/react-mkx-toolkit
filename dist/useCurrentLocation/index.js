"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useCurrentLocation = () => {
    const [location, setLocation] = (0, react_1.useState)({
        latitude: 0,
        longitude: 0,
        address: {},
        display_name: "",
    });
    const { latitude, longitude, address, display_name } = location;
    (0, react_1.useEffect)(() => {
        const getCurrentLocation = async () => {
            try {
                if (!("geolocation" in navigator)) {
                    throw new Error("Geolocation is not supported by your browser.");
                }
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });
                const { latitude, longitude } = position.coords;
                const { address, display_name } = await getLocationString(latitude, longitude);
                setLocation({ latitude, longitude, address, display_name });
            }
            catch (error) {
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
const getLocationString = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
        const { address, display_name } = await response.json();
        return { address, display_name, latitude, longitude };
    }
    catch (error) {
        console.error("Error fetching location data:", error);
        return { address: null, display_name: null, latitude, longitude };
    }
};
exports.default = useCurrentLocation;
//# sourceMappingURL=index.js.map