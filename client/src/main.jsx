// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import "./index.css";
import Portfolio from "./pages/Portfolio.jsx";
import Holding from "./pages/Holding.jsx";
import Profile from "./pages/Profile.jsx";
import Wallet from "./pages/Wallet.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <Portfolio /> },  // Removed path for index route
      { path: "holding", element: <Holding /> }, // Removed leading slash from path
      { path: "profile", element: <Profile /> },
      { path: "wallet", element: <Wallet /> },
      { path: "watchlist", element: <Watchlist /> },
    ],
  },
  {
    path: "/login",element : <Login/>
  },
  {
    path: "/signup",element : <SignUp/>
  }
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  /* </StrictMode>, */
);
