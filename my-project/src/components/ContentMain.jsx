import { useData } from "../store/Context";

import Title from "./Title";

function ContentMain() {
  const { data } = useData();

  return (
    <div>
      <Title>{data[0]?.meanings[0]?.partOfSpeech}</Title>

      <div className="flex flex-col gap-6">
        <p>Meaning</p>
        <ul className="">
          {data[0]?.meanings[0]?.definitions.map((a) => {
            return (
              <div key={data[0]?.meanings} className="flex items-center ">
                <p className="h-[5px] w-[5px] rounded-full bg-mainPurple"></p>
                <li
                  className="p-3 border-b-2 font-medium text-bodyM"
                  key={a.definition}
                >
                  {a.definition}
                </li>
              </div>
            );
          })}
        </ul>
        <div className="flex gap-6  pt-3">
          <p className="text-mainDarkGray text-headingS">Synoyms</p>{" "}
          <p className="text-mainPurple text-headingS font-bold">
            {data[0]?.meanings[0]?.synonyms}
          </p>
        </div>
      </div>

      <Title>{data[0]?.meanings[1]?.partOfSpeech}</Title>

      <p>Meaning</p>
      <ul>
        {data[0]?.meanings[1]?.definitions.map((a) => {
          return <li key={a.definition}>{a.definition}</li>;
        })}
      </ul>

      <div className="flex gap-6">
        <p>source:</p>{" "}
        <a target="blank" href={`${data[0]?.sourceUrls[0]}`}>
          {data[0]?.sourceUrls[0]}
        </a>
        <img src="/public/imgs/icon-new-window.svg" alt="new window svg" />
      </div>
    </div>
  );
}

export default ContentMain;
