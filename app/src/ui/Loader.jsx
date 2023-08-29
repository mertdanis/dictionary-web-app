import { Audio } from "react-loader-spinner";

function Loader() {
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="black"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}

export default Loader;
