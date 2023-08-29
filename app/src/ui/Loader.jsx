import { Audio } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center items-center">
      <Audio
        height="150"
        width="150"
        radius="9"
        color="black"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

export default Loader;
