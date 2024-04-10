"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useKeyboard = (key, callback) => {
    (0, react_1.useEffect)(() => {
        const handleKeyDown = (event) => {
            try {
                if (event.key === key) {
                    event.preventDefault();
                    callback();
                }
            }
            catch (error) {
                console.error("Error in useKeyboard hook:", error);
            }
        };
        try {
            window.addEventListener("keydown", handleKeyDown);
        }
        catch (error) {
            console.error("Error adding event listener in useKeyboard hook:", error);
        }
        return () => {
            try {
                window.removeEventListener("keydown", handleKeyDown);
            }
            catch (error) {
                console.error("Error removing event listener in useKeyboard hook:", error);
            }
        };
    }, [key, callback]);
};
exports.default = useKeyboard;
//# sourceMappingURL=index.js.map