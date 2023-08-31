import { useData } from "../store/Context";

function Header() {
  const { dispatch, currentTheme } = useData();

  return (
    <div className="flex justify-between py-6 gap-6">
      <img className="cursor-pointer" src="/public/imgs/logo.svg" alt="" />
      <div className="flex ">
        <div
          onClick={() => {
            dispatch({
              type: "changeTheme",
            });
          }}
          className="cursor-pointer flex  items-center"
        >
          {currentTheme === "light" ? (
            <i className="fa-solid fa-lightbulb fa-2xl"></i>
          ) : (
            <i className="fa-regular fa-lightbulb fa-2xl"></i>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
