import { useLocation } from 'react-router-dom'; // Importando useLocation
import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    const location = useLocation(); // Obtém a URL atual

    // Verifica se a URL atual é a página inicial ('/')
    const isHomePage = location.pathname === '/';

    return (
        <main>
            {/* Renderiza o Banner apenas na página inicial */}
            {isHomePage && <Banner />}
            
            {/* Renderiza o conteúdo das rotas dentro do Outlet */}
            <Outlet />
        </main>
    );
}
