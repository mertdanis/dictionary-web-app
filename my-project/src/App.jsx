import Header from "./components/Header";
import Input from "./components/Input";
import Content from "./components/Content";

import { useData } from "./store/Context";

import Loader from "./ui/Loader";

function App() {
  const { dispatch, isLoading } = useData();

  return (
    <div className="flex flex-col justify-center items-center  h-screen">
      {isLoading && <Loader />}
      <div className="flex flex-col w-1/3">
        <Header />
        <Input
          onChange={(e) => {
            dispatch({
              type: "inputValue",
              payload: e.target.value,
            });
          }}
        />
        <Content />
      </div>
    </div>
  );
}

export default App;
