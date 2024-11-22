import { useState } from "react";


const PageTeste = () => {
    const [paginacao, setPaginacao] = useState(1);

    const handleNextPage = () => {
        if (paginacao < 3) {
            setPaginacao(paginacao + 1);
        }
    };

    const handlePreviousPage = () => {
        if (paginacao > 1) {
            setPaginacao(paginacao - 1);
        }
    };

    const page01 = () => (
        <div>
            <input
                title="Faturamento mensal:"
                nome="faturamento_mensal"
                value={
                    1
                }

                type="number"
                placeholder="Digite um valor (Obrigatório)"
            />
            <input
                title="Número de funcionários:"
                nome="num_funcionarios"
                value={1}

                type="number"
                placeholder="Digite um valor (Opcional)"
            />

            <input
                title="Valor da folha de pagamento:"
                nome="folha_pagamento"
                value={
                    1
                }

                type="number"
                placeholder="Digite um valor (Opcional)"
            />


        </div>
    )

    const renderPage = () => {
        switch (paginacao) {
            case 1:
                return page01();
            default:
                return null;
        }
    };
    return (
        <div>
            teste
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <span style={{ marginRight: '10px', fontSize: paginacao >= 1 ? '24px' : '16px', color: paginacao >= 1 ? 'blue' : 'grey' }}>🔵</span>
                <span style={{ marginRight: '10px', fontSize: paginacao >= 2 ? '24px' : '16px', color: paginacao >= 2 ? 'blue' : 'grey' }}>🔵</span>
                <span style={{ fontSize: paginacao >= 3 ? '24px' : '16px', color: paginacao >= 3 ? 'blue' : 'grey' }}>🔵</span>
            </div>

            {renderPage()}

            <input
                title="Faturamento mensal:"
                nome="faturamento_mensal"
                value={
                    1
                }

                type="number"
                placeholder="Digite um valor (Obrigatório)"
            />
            <div style={{ marginTop: '20px' }}>
                {paginacao > 1 && <button onClick={handlePreviousPage}>Voltar</button>}
                {paginacao < 3 && <button onClick={handleNextPage} style={{ marginLeft: '10px' }}>Próxima</button>}
            </div>
        </div>
    )
}

export default PageTeste;