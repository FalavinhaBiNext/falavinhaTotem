import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContextProvider";

export default function PopupModal() {
  const { setShowModal, showModal } = useContext(GlobalContext);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <div className="overlay">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button onClick={() => sessionStorage.setItem("showmodal", false)}>
          Fechar
        </button>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            magni modi sequi quisquam numquam perferendis temporibus explicabo
            recusandae blanditiis est aperiam placeat distinctio, porro itaque!
            Dolorum temporibus soluta necessitatibus, laborum porro qui earum
            incidunt corporis cumque aut quod sit, similique molestias modi
            blanditiis praesentium possimus enim minima atque! Fugit aspernatur
            iusto dolorum adipisci commodi saepe quidem architecto, provident
            voluptas ipsum, aut tempora velit numquam unde doloremque veritatis
            mollitia modi illo! Accusantium aliquid, nam corporis suscipit
            inventore aliquam sapiente asperiores possimus libero alias
            excepturi consequuntur. Quis, voluptatem, officiis sunt eligendi
            labore odit in molestiae ab dolorem, expedita libero unde
            repellendus hic?
          </p>
        </div>
      </div>
    </div>
  );
}
