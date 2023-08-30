import { useData } from "../store/Context";
import Title from "./Title";
import ContentComp from "./ContentComponent";
import Synonym from "./Synonym";

function ContentMainList() {
  const { data } = useData();

  return (
    <div>
      <Title>{data[0]?.meanings[0]?.partOfSpeech}</Title>

      <div className="flex flex-col  ">
        <p className="font-medium text-headingS text-mainDarkGray mb-6">
          Meaning
        </p>

        {data[0]?.meanings[0]?.definitions.map((data, index) => {
          return <ContentComp data={data} index={index} />;
        })}

        <div className="flex gap-6   my-6">
          <p className="text-mainDarkGray text-headingS">Synoyms</p>{" "}
          <div className="text-mainPurple text-headingS font-bold flex gap-6">
            {data[0]?.meanings[0]?.synonyms.map((synonym) => {
              return <Synonym key={synonym} content={synonym} />;
            })}
          </div>
        </div>
      </div>

      <Title>{data[0]?.meanings[1]?.partOfSpeech}</Title>
      <p className="font-medium text-headingS text-mainDarkGray mb-6">
        Meaning
      </p>

      {data[0]?.meanings[1]?.definitions.map((content, index) => {
        return <ContentComp data={content} index={index} />;
      })}

      <div className="flex gap-3 items-center justify-center border-t-[1px]  py-3">
        <p>Source</p> <p> {data[0]?.sourceUrls[0]}</p>
        <a target="blank" href={`${data[0]?.sourceUrls[0]}`}>
          <img
            className="h-[14px] w-[14px] cursor-pointer"
            src="/public/imgs/icon-new-window.svg"
            alt="new window svg"
          />
        </a>
      </div>
    </div>
  );
}

export default ContentMainList;
