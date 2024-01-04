import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner() {
    return (
        <div className={styles.banner}>
            
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Marcello Prado
                </h1>

                <p className={styles.paragrafo}>
                    Desenvolvedor Front-end
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido} alt="Circulo colorido"
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Marcello sorrindo"
                />

            </div>

        </div>
    )
}