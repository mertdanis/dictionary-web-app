import React from "react";

function Header() {
  return (
    <div className="flex justify-between p-6 gap-6">
      <img className="cursor-pointer" src="/public/imgs/logo.svg" alt="" />
      <div className="flex gap-6">
        <div className="cursor-pointer flex">
          <img src="/public/imgs/icon-moon.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
