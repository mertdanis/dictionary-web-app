import { useData } from "../store/Context";

function Title({ children }) {
  const { currentTheme } = useData();

  return (
    <div className="flex items-center gap-6 mb-6">
      <h3
        className={`font-bold text-mainLightBlack2 text-headingM italic ${
          currentTheme === "dark" ? "text-mainWhite" : ""
        }`}
      >
        {children}
      </h3>
      <div className="bg-mainGray grow h-[1px]"></div>
    </div>
  );
}

export default Title;
