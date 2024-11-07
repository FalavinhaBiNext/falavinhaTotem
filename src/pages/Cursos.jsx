import { useState } from "react";
import HeaderApp from "../components/Header";
import HeroApp from "../components/Hero";
import FooterApp from "../components/Footer";
import fundo from "../assets/image/Treinamento.png";
import FramerMotion from "../components/FramerMotion";
import { cursos } from "../services/db";
import Accordion from "../components/Accordion";


const Cursos = () => {

    const fieldsPage = 3;
    const [page, setPage] = useState(0);

    const start = page * fieldsPage;
    const end = start + fieldsPage;
    const sliced = cursos.slice(start, end);

    const nextPage = () => {
        if (end < cursos.length) setPage(page + 1);
    };

    const prevPage = () => {
        if (start > 0) setPage(page - 1);
    };

    return (
        <div style={{ display: "flex", flexFlow: "column", gap: "20px", padding: "20px", height: "100vh" }}>
            <HeaderApp redirect={"/treinamentos"} >
                <h1 className="title">CURSOS GRUPO FALAVINHA NEXT</h1>
            </HeaderApp>
            <HeroApp fundo={fundo}>
                <FramerMotion>
                    <div>
                        <h2 className="subtitulo">NÚCLEO DE EDUCAÇÃO CORPORATIVA GRUPO FALAVINHA NEXT</h2>
                    </div>
                    <div style={
                        { display: "flex", flexFlow: "column", gap: "20px", padding: "20px" }
                    }>
                        {sliced.map((item, index) =>
                            <Accordion name={item.name} description={item.description} item={item.item} key={index} />
                        )}
                    </div>
                    <div className="page-curso_paginacao">
                        {page === 0 ? null : <button className="botao" onClick={prevPage}>Anterior</button>}
                        {end >= cursos.length ? null : <button className="botao" onClick={nextPage}>Próximo</button>}
                    </div>
                </FramerMotion>
            </HeroApp>
            <FooterApp>

            </FooterApp>

        </div>
    )
}

export default Cursos