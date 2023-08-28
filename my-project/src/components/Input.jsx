import { useData } from "../store/Context";

function Input({ onChange }) {
  return (
    <div className="relative">
      <input
        className="p-6 bg-slate-300 text-black w-full rounded-xl"
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
