## React Useful Custom Hooks

![NPM](https://img.shields.io/badge/Author-Mani%20Kant%20Sharma-blue) ![npm](https://img.shields.io/npm/v/react-mkx-toolkit?color=1C939D)
![npm](https://img.shields.io/npm/dt/react-mkx-toolkit) ![NPM](https://img.shields.io/npm/l/react-mkx-toolkit) ![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/react-mkx-toolkit)

## Description

React Custom Hooks provide an efficient means to encapsulate and share logic among components within React applications.
This package includes useful React custom hooks.

## Table of Contents

- [Installation](#installation)
- [Browser Support](#browser-support)
- [useKeyboard](#useKeyboard)
- [useRandomArray](#useRandomArray)
- [useCurrentLocation](#useCurrentLocation)
- [useScroll](#useScroll)
- [useNotification](#useNotification)
- [License](#license)
- [Author](#author)

## Installation

You can install the package using npm:

```shell
npm install react-mkx-toolkit
```

Or using yarn:

```shell
yarn add react-mkx-toolkit
```

## useKeyboard

The `useKeyboard` hook is a custom React hook designed to simplify the handling of keyboard events within your React applications. With this hook, you can easily listen for specific keyboard inputs and execute callback functions in response to those inputs.

## Usage

```jsx
import { useKeyboard } from "react-mkx-toolkit";

const MyComponent = () => {
  const handleKeyPress = () => {
    console.log("The Enter key was pressed!");
  };

  useKeyboard("Enter", handleKeyPress);
  return <>MyComponent</>;
};
export default MyComponent;
```

## useRandomArray

The `useRandomArray` hook is useful for scenarios where you need to generate a sequence of numbers within a specified range,
such as creating test data, generating random values, or iterating through a range of numerical values.

## Usage

```jsx
import { useRandomArray } from "react-mkx-toolkit";

const MyComponent = () => {
  const arr = useRandomArray(0, 10);
  //Output : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  return <>MyComponent</>;
};
export default MyComponent;
```

## useCurrentLocation

The `useCurrentLocation` hook to retrieve the current geographic location of the user. This hook is useful for scenarios where you need to access the user's current location for various purposes such as location-based services, mapping applications, or any feature requiring the user's geographical coordinates.

## Usage

```jsx
import { useCurrentLocation } from "react-mkx-toolkit";

const MyComponent = () => {
  const { display_name, address, latitude, longitude } = useCurrentLocation();

  return (
    <div>
      <p>
        <span>Display Name : </span>
        <span>{display_name}</span>
      </p>
      <p>
        <span>Latitude : </span>
        <span>{latitude}</span>
      </p>
      <p>
        <span>Longitude : </span>
        <span>{longitude}</span>
      </p>
      <p>
        <span>Address : </span>
        <span>{JSON.stringify(address)}</span>
      </p>
    </div>
  );
};
export default MyComponent;
```

## useScroll

The `useScroll` hook is a custom React hook designed to provide a set of utilities for scrolling within a web application. Its main purpose is to encapsulate common scrolling functionality, making it easier to manage and reuse scrolling behavior across different components.

## Usage

```jsx
import React from "react";
import { useScroll } from "react-mkx-toolkit";

function ScrollComponent() {
  const { scrollToTop, scrollToBottom, scrollById } = useScroll();

  const handleScrollToTop = () => {
    scrollToTop();
  };

  const handleScrollToBottom = () => {
    scrollToBottom();
  };

  const handleScrollById = () => {
    scrollById("myElementId", {
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div>
      <button onClick={handleScrollToTop}>Scroll to Top</button>
      <button onClick={handleScrollToBottom}>Scroll to Bottom</button>
      <button onClick={handleScrollById}>Scroll to Element with ID</button>
      <div id="myElementId">Element to scroll to</div>
    </div>
  );
}

export default ScrollComponent;
```

## useNotification

The `useNotification` hook simplifies the process of working with browser notifications in React applications. It provides a clean and intuitive interface for requesting permission and displaying notifications.

## Usage

```jsx
import { useNotification } from "react-mkx-toolkit";

const MyComponent = () => {
  const { requestPermission, showNotification, notificationPermission } =
    useNotification();

  const handleClick = () => {
    showNotification("Hello!", {
      body: "This is a notification from your web app.",
      icon: "path/to/your/icon.png",
    });
  };

  return (
    <div>
      <button onClick={requestPermission}>Request Permission</button>
      <button
        onClick={handleClick}
        disabled={notificationPermission !== "granted"}
      >
        Show Notification
      </button>
    </div>
  );
};

export default MyComponent;
```

### Note

Call the `requestPermission` function to request permission from the user before showing notifications.

### Returns

- requestPermission: A function to request permission for displaying notifications.
- showNotification: A function to display notifications with the given title and options.
- notificationPermission: The current notification permission state (granted, denied, or default).

## Browser Support

| ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                          | Latest ✔                                                                                             | Latest ✔                                                                                          | Latest ✔                                                                                       | Latest ✔                                                                                    | 11 ✔                                                                                                                                    |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Mani Kant Sharma](https://www.linkedin.com/in/manikants98)

[![Email](https://img.shields.io/badge/-Gmail-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:manikants157@gmail.com)
[![Instagram](https://img.shields.io/badge/-Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/manikantsharmaa/)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/manikants98)
