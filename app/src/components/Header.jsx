import { useData } from "../store/Context";

function Header() {
  const { data, dispatch, currentTheme } = useData();

  return (
    <div className="flex justify-between p-6 gap-6">
      <img className="cursor-pointer" src="/public/imgs/logo.svg" alt="" />
      <div className="flex gap-6">
        <div
          onClick={() => {
            dispatch({
              type: "changeTheme",
            });
          }}
          className="cursor-pointer flex  items-center"
        >
          {currentTheme === "light" ? (
            <i class="fa-solid fa-lightbulb fa-2xl"></i>
          ) : (
            <i class="fa-regular fa-lightbulb fa-2xl"></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
