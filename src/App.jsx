import Header from "./components/Header";
import Input from "./components/Input";
import Content from "./components/Content";
import Theme from "./ui/Theme";

import { useData } from "./store/Context";

import Loader from "./ui/Loader";
import NotFound from "./components/NotFound";
import { useState } from "react";

function App() {
  const { isLoading, notFound, data } = useData();

  const [word, setWord] = useState("");

  return (
    <div className="flex flex-col text-text__color  bg-body__background items-center  h-full">
      <div className="flex flex-col h-screen pt-6 sm:w-5/12 w-10/12">
        <Theme />
        <Header />
        <Input
          setWord={setWord}
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        {isLoading && <Loader />}
        {notFound === true ? (
          <>
            <NotFound />
          </>
        ) : (
          <>
            <Content />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
