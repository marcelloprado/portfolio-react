import { Link } from "react-router-dom"
import styles from "./PostCard.module.css"
import BotaoPrincipal from "components/BotaoPrincipal"

export default function PostCard({ post }) {
    return (

        <Link to={`/public/assets/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt='Imagem de capa do post'
                />
                <h2 className={styles.titulo}>{post.titulo}</h2>
                <p className={styles.texto}>{post.texto}</p>

                <BotaoPrincipal>entrar</BotaoPrincipal>
            </div>
        </Link>
    )
}