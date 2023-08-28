import { useData } from "../store/Context";

function Input({ onChange, className }) {
  return (
    <div className="relative">
      <input
        className="p-6 bg-mainLightGray text-mainLightBlack2 font-bold  rounded-xl "
        type="text"
        placeholder="Search for any word..."
        onChange={onChange}
      />
      <img
        className="absolute top-5 right-5 h-8 cursor-pointer"
        src="/public/imgs/icon-search.svg"
        alt="search icon"
      />
    </div>
  );
}

export default Input;
