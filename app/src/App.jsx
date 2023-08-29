import Header from "./components/Header";
import Input from "./components/Input";
import Content from "./components/Content";
import Theme from "./ui/Theme";

import { useData } from "./store/Context";

import Loader from "./ui/Loader";
import NotFound from "./components/NotFound";
import { useState } from "react";

function App() {
  const { dispatch, isLoading, notFound } = useData();

  const [word, setWord] = useState("");

  return (
    <div className="flex flex-col text-text__color  bg-body__background items-center  h-screen">
      {isLoading && <Loader />}
      <div className="flex flex-col w-1/3">
        <Input
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        {notFound === true ? (
          <>
            <NotFound />
          </>
        ) : (
          <>
            <Theme />
            <Header />

            <Content />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
