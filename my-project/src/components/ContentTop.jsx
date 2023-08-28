import React from "react";

import { useData } from "../store/Context";

function ContentTop() {
  const { data } = useData();

  return (
    <div className="flex justify-between  p-6 items-center">
      <div className="flex flex-col gap-6">
        <h2 className="text-6xl text-mainLightBlack2 font-bold">
          {data[0]?.word}
        </h2>
        <p className="text-purple-500 font-medium text-headingM">
          {data[0]?.phonetic}
        </p>
      </div>
      <div className="rounded-full bg-purple-100 hover:bg-purple-200 transition duration-300 h-[75px] w-[75px] cursor-pointer flex items-center justify-center">
        <img src="/public/imgs/icon-play.svg" alt="play audio button" />
      </div>
    </div>
  );
}

export default ContentTop;
