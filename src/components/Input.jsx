import { useData } from "../store/Context";

function Input({ onChange, className, value, setWord }) {
  const { dispatch, currentTheme } = useData();

  return (
    <div className="relative w-full">
      <form action="submit">
        <input
          required
          value={value}
          className={`  p-6 mt-6 bg-mainLightGray text-mainLightBlack2 font-bold   rounded-xl w-full focus:outline-mainPurple  ${
            currentTheme === "dark" ? "bg-mainDarkerBlack text-mainWhite" : ""
          }`}
          type="text"
          placeholder="Search for any word..."
          onChange={onChange}
        />

        <button
          onClick={(e) => {
            if (value === "") return;
            e.preventDefault();
            setWord("");
            dispatch({
              type: "fetchData",
              payload: value,
            });
          }}
        >
          <img
            onClick={() => {
              if (value === "") return;
            }}
            className="absolute top-12 right-5 h-6 cursor-pointer"
            src="/public/imgs/icon-search.svg"
            alt="search icon"
          />
        </button>
      </form>
    </div>
  );
}

export default Input;
