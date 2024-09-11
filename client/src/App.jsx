import { Outlet } from "react-router-dom";
import Navigation from "./pages/Navigation.jsx";

const App = () => {
  return (
    <>
      <main className="flex">
        <Navigation />
        <Outlet />
      </main>
    </>
  );
};

export default App;
