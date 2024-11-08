import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FooterApp from "../../components/Footer";
import imagem from "../../assets/image/Servicos2.png";
import routes from "../../routes";
import FramerMotion from "../../components/UI/FramerMotion";
import ButtonLinks from "../../components/UI/ButtonLinks";
import textos from "../../components/UI/textos";
import gifCoins from "../../assets/gifs/coins1.gif";
import gifMala from "../../assets/gifs/mala.gif";
import gifAvatar from "../../assets/gifs/avatar.gif";
import gifService from "../../assets/gifs/servicos.gif";
import HeroMessageLayout from "../../components/UI/HeroMessageLayout";
import QRCodeIcons from "../../components/UI/QRCodeIcons";
import MainPageTitle from "../../components/UI/MainPageTitle";

export default function Servicos() {
  // blocos de detalhes
  const presentationBlocks = [
    {
      icon: gifMala,
      title: "+47 ANOS DE HISTÓRIA",
    },
    {
      icon: gifCoins,
      title: "+15.000 CLIENTES ATENDIDOS",
    },
    {
      icon: gifAvatar,
      title: "+180 COLABORADORES",
    },
    {
      icon: gifService,
      title: "+15 SERVIÇOS",
    },
  ];

  // links dos botões
  const options = [
    { name: "DASHBOARDS BI", route: routes.bi },
    { name: "TRIBUTÁRIO", route: routes.tributario },
    { name: "CONTABILIDADE", route: routes.contabilidade },
    { name: "CONSULTORIA RH", route: routes.consultoriRh },
    { name: "CIGAM", route: routes.cigam },
    {
      name: "CONSULTORIA EMPRESARIAL",
      route: routes.consultoriaEmpresarial,
    },
    { name: "HOLDING", route: routes.holding },
    { name: "TREINAMENTOS", route: routes.treinamentos },
  ];

  return (
    <>
      <HeaderApp>
        <MainPageTitle title="NOSSAS SOLUÇÕES" />
      </HeaderApp>

      <HeroApp fundo={imagem}>
        <FramerMotion>
          <HeroMessageLayout>
            <p className="textoMain">{textos.Servicos.Texto}</p>
          </HeroMessageLayout>

          <div className="max-w-[992px] mx-auto py-10">
            <ul className="grid grid-cols-standard gap-4">
              {presentationBlocks.map(({ title, icon }) => (
                <li
                  className="flex flex-col items-center justify-center gap-2 
                  min-h-[150px] w-full border-2 border-primary_color rounded-[10px] 
                  shadow-bx-1 p-4"
                  key={title}
                >
                  <img src={icon} alt="" className="w-[40px] h-[40px]" />
                  <p className="text-light_color font-gilroyBold text-base text-center leading-[1.2rem]">
                    {title}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <ButtonLinks options={options} />

          <QRCodeIcons />
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}
