import styles from './SobreMim.module.css';

import PostModelo from 'components/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, 
            </h3>

            <img
                className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt="Caricatura de Marcello sorrindo"
            />

            <p className={styles.paragrafo}>
            Sou um entusiasta da tecnologia, e minha jornada começou em 1996, aos 14 anos, quando já ajudava meu pai com a manutenção de computadores 286 e 386. Desde então, minha paixão por TI só cresceu.
            </p>
            <p className={styles.paragrafo}>
            Ao longo dos anos, passei por diversas áreas, desde manutenção de hardware até telecomunicações, sempre buscando aprender e me adaptar.
            </p>
            <p className={styles.paragrafo}>
            Fiz cursos técnicos no Senai, trabalhei como instrutor de laboratório de TI e até abri minha própria empresa de manutenção e suporte, levando soluções e satisfação para meus clientes.
            </p>
            <p className={styles.paragrafo}>
            Atualmente, estou em transição de carreira para a área de programação. Tenho conhecimentos em <span> HTML,</span> <span>CSS,</span> <span>JavaScript,</span> <span>React</span> e <span>Git/GitHub,</span>
            </p>
            <p className={styles.paragrafo}>
            além de estar estudando <span>Python</span> há 6 meses para ampliar minhas habilidades e aprofundar-me no desenvolvimento Back-end.
            </p>
            <p className={styles.paragrafo}>
            Meu foco agora é construir uma nova trajetória profissional, dedicando-me integralmente aos estudos e projetos pessoais para me tornar um desenvolvedor completo.
            </p>
            <p className={styles.paragrafo}>
            Sou movido por desafios e aprendizado constante, sempre buscando evoluir e criar soluções que impactem positivamente a vida das pessoas.
            </p>
            <p className={styles.paragrafo}>
            Estou animado para compartilhar minha jornada e projetos com você. Vamos construir algo incrível juntos! 🚀
            </p>

        </PostModelo>
    )
}