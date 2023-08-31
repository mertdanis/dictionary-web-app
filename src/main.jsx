import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { useData, MainContext } from "./store/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainContext>
    <App />
  </MainContext>
);
