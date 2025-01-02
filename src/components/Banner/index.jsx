import styles from "./Banner.module.css";
import minhaFoto from "assets/minha_foto.png";
import { TypeAnimation } from "react-type-animation";

import { useState, useEffect, useCallback } from "react";

export default function Banner() {
    const [showBanner, setShowBanner] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0); // Armazenar a última posição do scroll

    // Função para esconder ou mostrar o banner dependendo da direção do scroll
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 20 && currentScrollY > lastScrollY) {
            setShowBanner(false);
        } else if (currentScrollY < lastScrollY || currentScrollY < 10) {
            setShowBanner(true);
        }

        setLastScrollY(currentScrollY);
    }, [lastScrollY]); // `lastScrollY` é uma dependência

    // Adicionando o listener de scroll ao componente
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]); // Inclui `handleScroll` como dependência

    return (
        showBanner && (
            <div className={styles.banner}>
                <div>
                    <h1 className={styles.titulo}>Marcello Prado Muller</h1>

                    <TypeAnimation
                        className={styles.paragrafo}
                        sequence={[
                            `\nSeja Bem vindo(a) ao meu portfólio,\nEsse projeto foi desenvolvido com React Js\ne foi utilizado o React Router Dom, Rotas aninhadas\ne dinâmicas, Trabalhando com useLocation, NavLink, useStates, useNavigate e a famosa page not found 404, Abaixo segue alguns dos projetos. \nNo momento estou focado em desenvolvimento web com python e SQL.`,
                            4000,
                            "",
                        ]}
                        omitDeletionAnimation={true}
                        repeat={Infinity}
                    />
                </div>

                <div className={styles.imagens}>
                    <img
                        className={styles.minhaFoto}
                        src={minhaFoto}
                        alt="Foto do Marcello sorrindo"
                    />
                </div>
            </div>
        )
    );
}
