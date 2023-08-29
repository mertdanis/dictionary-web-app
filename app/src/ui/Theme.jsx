import { useData } from "../store/Context";

function Theme() {
  const { currentTheme, dispatch } = useData();

  const setTheme = () => {
    const body = document.querySelector("body");

    if (currentTheme === "light") {
      body.setAttribute("data-theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
    }
  };

  setTheme();
}

export default Theme;
