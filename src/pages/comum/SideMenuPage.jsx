import { useState } from "react";
import VideoPlayer from "../../components/UI/VideoPlayer";
import logo from "../../assets/image/LogoFalavinhaCTT.png";

export default function SideMenuPage() {
  const [isToggled, setIsToggled] = useState(false);

  const customHeaderStyle = {
    transform: `${isToggled ? "translateX(-100%)" : "translateX(0)"}`,
    transition: "all 0.3s ease-in-out",
  };

  return (
    <>
      <header
        className="min-[992px]:p-base_container px-5  h-auto flex justify-between flex-col gap-3 absolute top-0 left-0 right-0 z-[100] 
      transition-all duration-200 ease-in-out"
        style={customHeaderStyle}
      >
        <figure className="flex items-center justify-between pt-3">
          <img
            className="max-w-[35vw] md:max-w-[180px] relative z-[10000]"
            src={logo}
            title="Falavinha Next"
            alt="Falavinha Next"
          />
        </figure>
      </header>

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
        <label
          className="menu-label"
          htmlFor="myInput"
          onClick={() => setIsToggled(!isToggled)}
        >
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </label>

        <div className="content">
          <VideoPlayer />
        </div>
      </section>
    </>
  );
}
