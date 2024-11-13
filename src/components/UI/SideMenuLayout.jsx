export default function SideMenuLayout({ children }) {
  return (
    <>
      <aside className="menu-aside">
        <ul className="menu-aside__list">
          <li>
            <a href="" className="menu-aside__anchor">
              Link
            </a>
          </li>
          <li>
            <a href="" className="menu-aside__anchor">
              Link
            </a>
          </li>
          <li>
            <a href="" className="menu-aside__anchor">
              Link
            </a>
          </li>
          <li>
            <a href="" className="menu-aside__anchor">
              Link
            </a>
          </li>
        </ul>
      </aside>

      <section className="menu-section">
        <input type="checkbox" id="myInput" />
        <label className="menu-label" htmlFor="myInput">
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </label>

        <div className="content">{children}</div>
      </section>
    </>
  );
}
