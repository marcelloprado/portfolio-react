import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />

                <Outlet />
            {/*  Renderizar conteúdo da rota aqui */}
        </main>
    )
}