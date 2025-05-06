import styles from "./Inicio.module.css";
import posts from "Json/posts.json";

import Post from "components/PostCard";

export default function Inicio() {
    return (
        <>
        <div className={styles.container}>
            <h1>Alguns Projetos</h1>
        </div>
            <ul className={styles.posts}>
                
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
                ))}
                
            </ul>
        </>
    )
}