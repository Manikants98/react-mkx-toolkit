"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useNotification = () => {
    const [notificationPermission, setNotificationPermission] = (0, react_1.useState)(Notification.permission);
    const requestPermission = () => {
        if (!("Notification" in window)) {
            console.error("This browser does not support desktop notification");
            return;
        }
        if (Notification.permission !== "granted" &&
            Notification.permission !== "denied") {
            Notification.requestPermission().then((permission) => {
                setNotificationPermission(permission);
            });
        }
    };
    const showNotification = (title, options) => {
        if (notificationPermission === "granted") {
            new Notification(title, options);
        }
        else if (notificationPermission === "default") {
            console.warn("Notification permission has not been granted or denied. Call requestPermission first.");
        }
        else {
            console.warn("Notification permission has been denied. User needs to grant permission to display notifications.");
        }
    };
    return { requestPermission, showNotification, notificationPermission };
};
exports.default = useNotification;
//# sourceMappingURL=index.js.map