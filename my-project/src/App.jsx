import Header from "./components/Header";
import Input from "./components/Input";
import ContentTop from "./components/ContentTop";
import ContentMain from "./components/ContentMain";

import { useData } from "./store/Context";

function App() {
  const { dispatch } = useData();

  return (
    <div>
      <Header />
      <Input
        onChange={(e) => {
          dispatch({
            type: "inputValue",
            payload: e.target.value,
          });
        }}
      />
      <ContentTop />
      <ContentMain />
    </div>
  );
}

export default App;
