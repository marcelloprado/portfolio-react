import styles from "./Banner.module.css";
import minhaFoto from "assets/minha_foto.png";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
    return (
        <div className={styles.banner}>

            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Marcello Prado Muller
                </h1>

                <TypeAnimation
                    style={{ fontSize: '1.3rem', whiteSpace: 'pre-line', height: '50px', display: 'inline-block' }}
                    sequence={[

                        `\nSeja Bem vindo(a) ao meu portfólio,\nEsse projeto está sendo desenvolvido com React Js\nEstou utilizando o React Router Dom, Rotas aninhadas\ndinâmicas, Trabalhando com useLocation, NavLink, useStates, useNavigate e a famosa page not found 404,\nIrei adaptando ao projeto conforme for adquirindo conhecimento, no componente Contato utilizei styled Components`,
                        4000,
                        '',

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
}


