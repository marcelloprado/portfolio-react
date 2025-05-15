import './Post.css';
import styles from './post.module.css';

import { Route, Routes, useParams } from 'react-router-dom';
import posts from 'Json/posts.json';
import PostModelo from 'components/PostModelo';

import NaoEncontrada from 'pages/NaoEncontrada';
import PaginaPadrao from 'components/PaginaPadrao';
import PostCard from 'components/PostCard';

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
      <Route path='*' element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`public/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className={styles.texto}>
                <p>{post.texto}</p>
              </div>

              {/* //? Parte original do projeto com gif*/}
              {/* <div className={styles.container}>
                <div className={styles.gif}>
                  <gif src={post.gif} alt='dif do projeto' />
                </div>
              </div> */}

              <div className={styles.container}>
                <div className={styles.videosMp4}>
                  {post.video ? (
                    <video
                      src={post.video} // Caminho para o vídeo MP4
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={post.titulo || 'Vídeo do projeto'}
                    >
                      Seu navegador não suporta o elemento de vídeo. Você pode{' '}
                      <a href={post.video}>baixar o vídeo</a> diretamente ou ver
                      o <a href={post.gif}>GIF alternativo</a>.
                    </video>
                  ) : (
                    <img
                      src={post.gif} // Caminho para o GIF
                      alt={post.titulo || 'Animação do projeto'} // Texto alternativo mais descritivo
                      className={styles.mediaElement} // Mesma classe do vídeo para consistência, ou styles.gif
                    />
                  )}
                </div>
              </div>

              <p className={styles.link_projeto}>
                <a href={post.link} target='blank'>
                  Clique aqui: Link do projeto
                </a>
              </p>

              <h2 className={styles.tituloOutrosPosts}>Outros Projetos:</h2>

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
