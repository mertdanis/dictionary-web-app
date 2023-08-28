import Header from "./components/Header";
import Input from "./components/Input";
import Content from "./components/Content";

import { useData } from "./store/Context";

function App() {
  const { dispatch } = useData();

  return (
    <div className="flex flex-col items-center">
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
  );
}

export default App;
