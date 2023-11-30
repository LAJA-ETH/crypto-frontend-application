import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
import App from "./App";
import "./index.css";
import { wagmiClient } from "./utils/wagmi";

import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import backgroundImage from "./assets/svg/background1.svg";

const rootElement = document.getElementById("root") as HTMLElement;
// rootElement.style.backgroundSize = "cover";
// rootElement.style.backgroundPosition = "center";
// rootElement.style.backgroundRepeat = "no-repeat";
// Add the provided CSS classes and ID to the root element

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <WagmiConfig client={wagmiClient}>
      <App />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </WagmiConfig>
  </Provider>
);
