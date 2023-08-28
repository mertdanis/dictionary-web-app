import React from "react";

function Header() {
  return (
    <div className="flex justify-between">
      <img className="cursor-pointer" src="/public/imgs/logo.svg" alt="" />
      <div className="flex gap-6">
        <select name="" id="">
          <option value="sans">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="mono">Mono</option>
        </select>

        <div className="cursor-pointer">
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
