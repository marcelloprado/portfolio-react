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
                Olá, eu sou o marcello!
            </h3>

            <img
                className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt="Caricatura de Marcello sorrindo"
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Front-end e pretendo estudar Back-end também, estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha saga com TI começou em 1996 quando tinha 14 anos de idade, trocando bateria de placa mãe 286 e 386 que eram soldadas, ajudando meu pai que estudava manutenção e já programava em cobol e Pascal se não me engano.
            </p>
            <p className={styles.paragrafo}>
                Com 16, 17 anos fiz um curso de manutenção de computadores no senai MG, foi onde um professor nos mostrou o HTML e o CSS nada muito á fundo, na época achei sensacional mas não tinha condições de continuar estudadando.
            </p>
            <p className={styles.paragrafo}>
                Quando cheguei aos 20 e poucos anos estava como instrutor em um laboratório de manutenção em TI na cidade de itajaí SC, foi quando conheci o Dreanweaver, Flash e o Fireworks, então fui fazer um curso desses caras, junto com Photoshop, na época aprendi bastante coisa legal, Mas novamente o destino não permitiu. heheh
            </p>
            <p className={styles.paragrafo}>
                Parti então para área de Telecomunicações, fui levar a internet para os usuários trabalhando com instalação, configuração, cabeamento estruturado, trabalhei para alguns provedores de internet, mais não era o que eu queria, eu queria levar solução para o usuário, colocar a mão na massa.
            </p>
            <p className={styles.paragrafo}>
                Então voltei para manutenção, me especializei fazendo um curso técnico no Senai SC de manutenção e suporte em TI, montando um laboratório em casa e atendendo clientes da minha cidade, me formei e abri uma empresa, MEI, fiz amigos, clientes, negócios e o melhor de tudo, fiz pessoas felizes levando soluções para elas, foi então que veio a chamada pandêmia, isôlamento social, lojas e estabelecimentos fechados e clientes rompendo contrato, fui obrigado a executar o plano B novamente voltando para área de telecomunicações.
            </p>
            <p className={styles.paragrafo}>
                Fazia um ano e meio que estava de novo nas operações de telecominicações, quando me deu um start de como é programar, como é desenvolver alguma coisa e como é que faz essa aplicação?
                Foi onde mergulhei de cabeça e procurei fazer algumas imersões, me matriculei no Dev em dobro e estudava em minhas horas vagas, acordando as 05:00 estudando até as 07:00 e quando voltava do trabalho das 19:00 ás 00:00 finalizai o curso em 1 ano, aprendendo HTML, CSS, JavaScript, React, Git/gitHub, práticas de Clean Code e teste com jest.
                No final de 2023 me matriculei na instituição de ensino <b>Alura</b>, estudamos Mais um pouco de javaScript, TypeScript e lógica de programação, aprendemos bastante coisa
                de React
            </p>

        </PostModelo>
    )
}