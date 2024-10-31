import React from "react";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import fundo from "../../assets/image/ConsultoriaEmpresarial.png";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";

export default function QuestionarioEmpresarial() {
  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">Faça uma pesquisa sobre sua empresa</h1>
      </HeaderApp>

      <HeroApp fundo={fundo}>
        <FramerMotion>
          {/* <Formulario setisFormVisible={setisFormVisible} /> */}
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}
