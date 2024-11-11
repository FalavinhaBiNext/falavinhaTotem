import React from "react";

export default function SideMenu() {
  return (
    <aside className="bg-slate-400 fixed top-0 bottom-0 right-0 w-[20%] z-10">
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
  );
}
