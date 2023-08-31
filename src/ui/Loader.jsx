import { Audio } from "react-loader-spinner";

import { useData } from "../store/Context";

function Loader() {
  const { currentTheme } = useData();

  return (
    <div className="flex justify-center items-center">
      <Audio
        height="150"
        width="150"
        radius="9"
        color={`${currentTheme === "light" ? "black" : "white"}`}
        ariaLabel="loading"
        $wrapperStyle
        $wrapperClass
      />
    </div>
  );
}

export default Loader;
