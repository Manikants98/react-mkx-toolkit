import { NotificationOptions } from "./index.d";
import { useState } from "react";

/**
 * Custom hook for managing browser notifications.
 * @returns {{
 *   requestPermission: () => void,
 *   showNotification: (title: string, options?: NotificationOptions) => void,
 *   notificationPermission: NotificationPermission
 * }} Object containing functions to request and display notifications, and the current notification permission state.
 */
const useNotification = () => {
  const [notificationPermission, setNotificationPermission] =
    useState<NotificationPermission>(
      Notification.permission as NotificationPermission
    );

  /**
   * Requests permission for displaying notifications.
   * If the browser does not support notifications, or the permission is already granted or denied, this function does nothing.
   * Otherwise, it requests permission from the user and updates the notificationPermission state accordingly.
   */
  const requestPermission = () => {
    if (!("Notification" in window)) {
      console.error("This browser does not support desktop notification");
      return;
    }

    if (
      Notification.permission !== "granted" &&
      Notification.permission !== "denied"
    ) {
      Notification.requestPermission().then((permission) => {
        setNotificationPermission(permission);
      });
    }
  };

  /**
   * Displays a notification with the given title and options.
   * If the permission is granted, it creates a new Notification object with the provided title and options.
   * If the permission is default, it logs a warning indicating that the permission needs to be requested first.
   * If the permission is denied, it logs a warning indicating that the user needs to grant permission.
   * @param {string} title The title of the notification.
   * @param {NotificationOptions} [options] Additional options for the notification.
   */
  const showNotification = (title: string, options?: NotificationOptions) => {
    if (notificationPermission === "granted") {
      new Notification(title, options);
    } else if (notificationPermission === "default") {
      console.warn(
        "Notification permission has not been granted or denied. Call requestPermission first."
      );
    } else {
      console.warn(
        "Notification permission has been denied. User needs to grant permission to display notifications."
      );
    }
  };

  return { requestPermission, showNotification, notificationPermission };
};

export default useNotification;
