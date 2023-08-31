import { useData } from "../store/Context";
import { getNotfSound } from "../ui/Audio";

function Word() {
  const { data } = useData();

  const audio = data[0]?.phonetics.find((a) => {
    if (a.audio !== "") {
      return a;
    }
  });

  const audioUrl = audio?.audio;

  return (
    <div className="flex justify-between   items-center">
      <div className="flex flex-col my-6">
        <h2 className="sm:text-headingL text-[48px] font-bold  text-text__color sm:font-medium leading-normal	">
          {data[0]?.word}
        </h2>
        <p className="text-purple-500 font-medium text-headingM">
          {data[0]?.phonetic}
        </p>
      </div>
      <div
        onClick={() => {
          getNotfSound(audioUrl);
        }}
        className="rounded-full  transition duration-300 sm:h-[75px] sm:w-[75px] h-[48px] w-[48px] cursor-pointer flex items-center justify-center"
      >
        <img src="/public/imgs/icon-play.svg" alt="play audio button" />
      </div>
    </div>
  );
}

export default Word;
