import { useData } from "../store/Context";

function Header() {
  const { data, dispatch, currentTheme } = useData();

  console.log(currentTheme);

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
          className="cursor-pointer flex"
        >
          {currentTheme === "light" ? (
            <img src="/public/imgs/icon-moon.svg" alt="moon" />
          ) : (
            <img src="/public/imgs/icons8-sun.svg" alt="sun" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
