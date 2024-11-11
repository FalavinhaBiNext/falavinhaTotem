import React from "react";

export default function SideMenuPage() {
  return (
    <>
      <section className="">
        <input className="burger-menu" type="checkbox" id="myInput" />
        <label className="burger-label" htmlFor="myInput">
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </label>

        <div className="content">
          <h1 className="text-2xl font-bold text-red-500">Side Menu</h1>
        </div>
      </section>

      <aside className="">
        <ul className="asideList">
          <li>
            <a href="" className="asideAnchor">
              Link
            </a>
          </li>
          <li>
            <a href="" className="asideAnchor">
              Link
            </a>
          </li>
          <li>
            <a href="" className="asideAnchor">
              Link
            </a>
          </li>
          <li>
            <a href="" className="asideAnchor">
              Link
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
