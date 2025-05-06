import { Link } from "react-router-dom";
import styles from "./PostCard.module.css";
import BotaoPrincipal from "components/BotaoPrincipal";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png?v=${Date.now()}`}
          alt="Imagem de capa do post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>

        <BotaoPrincipal>entrar</BotaoPrincipal>
      </div>
    </Link>
  );
}
