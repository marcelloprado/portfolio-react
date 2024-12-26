import styles from "./Banner.module.css";
import minhaFoto from "assets/minha_foto.png";
import { TypeAnimation } from "react-type-animation";

export default function Banner() {
    return (
        <div className={styles.banner}>

            <div>
                <h1 className={styles.titulo}>
                    Marcello Prado Muller
                </h1>

                <TypeAnimation
                    style={{ fontSize: '1.3rem', whiteSpace: 'pre-line', height: '50px', display: 'inline-block' }}
                    sequence={[

                        `\nSeja Bem vindo(a) ao meu portfólio,\nEsse projeto foi desenvolvido com React Js\ne foi utilizado o React Router Dom, Rotas aninhadas\ne dinâmicas, Trabalhando com useLocation, NavLink, useStates, useNavigate e a famosa page not found 404, Abaixo segue alguns dos meus projetos. \nNo momento estou focado em desenvolvimento web com python e SQL.`,
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


