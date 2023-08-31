import { useData } from "../store/Context";
import Title from "./Title";
import ContentComp from "./ContentComponent";
import Synonym from "./Synonym";

function ContentMainList() {
  const { data } = useData();

  return (
    <div>
      <Title key={data[0]?.meanings[0]?.partOfSpeech}>
        {data[0]?.meanings[0]?.partOfSpeech}
      </Title>

      <div className="flex flex-col">
        <p className="font-medium text-headingS text-mainDarkGray mb-6">
          Meaning
        </p>

        {data[0]?.meanings[0]?.definitions.map((data, index) => {
          return <ContentComp key={index} data={data} index={index} />;
        })}

        {data[0]?.meanings[0]?.synonyms.length > 0 && (
          <div className="flex flex-col  gap-2 sm:flex-row  my-6 ">
            <p className="text-mainDarkGray text-headingS  sm:text-start text-center">
              Synoyms
            </p>{" "}
            <div className="text-mainPurple text-[16px] sm:text-headingS font-bold flex sm:gap-6 gap-4 sm:my-0 my-2 justify-center">
              {data[0]?.meanings[0]?.synonyms.map((synonym) => {
                return <Synonym key={synonym} content={synonym} />;
              })}
            </div>
          </div>
        )}
      </div>

      {data[0]?.meanings[1] !== undefined && (
        <>
          <Title key={data[0]?.meanings[0]?.partOfSpeech}>
            {data[0]?.meanings[1]?.partOfSpeech}
          </Title>
          <p className="font-medium text-headingS text-mainDarkGray mb-6">
            Meaning
          </p>

          {data[0]?.meanings[1]?.definitions.map((content, index) => {
            return <ContentComp key={index} data={content} index={index} />;
          })}
        </>
      )}

      <div className="  flex flex-col sm:flex-row gap-3 items-center justify-center border-t-[1px]  py-3">
        <p className="text-mainDarkGray">Source</p>
        <div className="flex justify-center items-center gap-3">
          <p className="underline"> {data[0]?.sourceUrls[0]}</p>
          <a target="blank" href={`${data[0]?.sourceUrls[0]}`}>
            <img
              className="h-[14px] w-[14px] cursor-pointer max-w-min	"
              src="/public/imgs/icon-new-window.svg"
              alt="new window svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContentMainList;
