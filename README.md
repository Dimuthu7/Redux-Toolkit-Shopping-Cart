# Redux-Toolkit-Shopping-Cart
A simple shopping cart app built with redux toolkit for learning purposes.

## What is Redux Toolkit?
Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It includes utilities to simplify common use cases like store setup, creating reducers, immutable update logic, and more. It also provides good defaults for store setup out of the box, and includes the most commonly used Redux addons built-in

## Why use Redux Toolkit?
Redux Toolkit can help simplify the state management process, especially when dealing with complex and interconnected components. Some of the benefits of using Redux Toolkit are:
- Centralized state management: With Redux Toolkit, you can maintain the state of your entire application in a single store, making it easier to manage and access data across components.
- Easier debugging: With Redux DevTools, you have a clear record of all the changes to your application’s state. This makes locating and fixing issues in your code easier, saving you time and effort in the debugging process.
- Better performance: By minimizing the number of state updates and reducing the need for prop drilling, Redux Toolkit helps improve your application’s performance.

## Why use Redux Persist?
Redux Persist is a library that allows you to save the Redux store in persistent storage, such as the local storage. This means that even after refreshing the browser, the site state will still be preserved. Redux Persist also includes methods that allow you to customize the state that gets persisted and rehydrated, all with an easily understandable API.

## How to set up the project?
To set up the project, you need to have Node.js installed on your machine. Then, follow these steps:
- Clone the GitHub repo with the following command:
```bash
git clone https://github.com/Dimuthu7/Redux-Toolkit-Shopping-Cart.git
```
- Navigate to the project directory and install the dependencies with the following command:

```bash
cd redux-toolkit-shopping-cart
npm install
```

- Start the development server with the following command:

```bash
npm run dev
```

- Open your browser and go to http://localhost:5173/ to see the app in action.

## How to use the app?

The app is a simple shopping cart that lets you add and remove items from your cart. You can also see the total price of your cart. The app uses Redux Toolkit to manage the state of the cart and the products, and Redux Persist to save the state in the local storage. The app also uses vite to create react app.

## Deployment

The app was deployed @ https://app.netlify.com/  <br/>
[![Netlify Status](https://api.netlify.com/api/v1/badges/eaad306f-378e-43c3-bc3a-a1f576b0e80f/deploy-status)](https://app.netlify.com/sites/simple-redux-cart-app/deploys)
