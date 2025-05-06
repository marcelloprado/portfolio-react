import styles from "./Banner.module.css";
import minhaFoto from "assets/minha_foto.png";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useCallback, useRef } from "react";

export default function Banner() {
    const [mostrarBanner, setMostrarBanner] = useState(true);

    const [lastScrollY, setLastScrollY] = useState(0); // Armazenar a última posição do scroll

    const debouncedScrollRef = useRef(null); // Armazena a função de debounce

    // Função para esconder ou mostrar o banner dependendo da direção do scroll
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 10 && currentScrollY > lastScrollY) {
            // Esconde o Banner quando rola para baixo
            setMostrarBanner(false);
        } else if (currentScrollY > lastScrollY - 10) {
            // Faz o banner reaparecer ao rolar para cima
            setMostrarBanner(true);
        }

        setLastScrollY(currentScrollY);
    }, [lastScrollY]); 

    // Configura o debounce no primeiro render
    useEffect(() => {
        const debounce = (func, delay) => {
            let timer;
            return (...args) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func(...args);
                }, delay);
            };
        };

        debouncedScrollRef.current = debounce(handleScroll, 10);
    }, [handleScroll]); // Atualiza apenas se `handleScroll` mudar

    // Adiciona e remove o evento de scroll
    useEffect(() => {
        const onScroll = () => {
            if (debouncedScrollRef.current) {
                debouncedScrollRef.current();
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []); // Apenas adiciona/remova listener no ciclo de vida do componente

    return (
        mostrarBanner && (
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
