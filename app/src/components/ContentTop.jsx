import { useData } from "../store/Context";
import { getNotfSound } from "../ui/Audio";

function ContentTop() {
  const { data } = useData();

  const audio = data[0]?.phonetics.find((a) => {
    if (a.audio !== "") {
      return a;
    }
  });

  const audioUrl = audio?.audio;

  return (
    <div className="flex justify-between  p-6 items-center">
      <div className="flex flex-col gap-6">
        <h2 className="text-6xl text-text__color font-bold">{data[0]?.word}</h2>
        <p className="text-purple-500 font-medium text-headingM">
          {data[0]?.phonetic}
        </p>
      </div>
      <div
        onClick={() => {
          getNotfSound(audioUrl);
        }}
        className="rounded-full bg-purple-100 hover:bg-purple-200 transition duration-300 h-[75px] w-[75px] cursor-pointer flex items-center justify-center"
      >
        <img src="/public/imgs/icon-play.svg" alt="play audio button" />
      </div>
    </div>
  );
}

export default ContentTop;
