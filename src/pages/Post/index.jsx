import "./Post.css";
import styles from "./post.module.css";

import { Route, Routes, useParams } from "react-router-dom";
import posts from "Json/posts.json";
import PostModelo from "components/PostModelo";

import NaoEncontrada from "pages/NaoEncontrada";
import PaginaPadrao from "components/PaginaPadrao";
import PostCard from "components/PostCard";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

    return (

        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`public/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className={styles.texto}>
                            <p>{post.texto}</p>
                        </div>
                            <p className={styles.desculpas}>{post.desc}</p>
                        
                        <div className={styles.container}>
                            <div className={styles.gif}>
                                <img src={post.gif} alt="Gif do projeto" />
                            </div>
                        </div>

                        <p className={styles.link_projeto}><a href={post.link} target="blank">Clique aqui: Link do projeto</a></p>
                        

              <h2 className={styles.tituloOutrosPosts}>
                Outros Projetos:
              </h2>

              <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        ></Route>
      </Route>
    </Routes>
  );
}
