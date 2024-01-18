import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Menu from './components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Rodape from 'components/Rodape';

// Pages
import SobreMim from 'pages/SobreMim';
import Inicio from './pages/Inicio';
import Contato from './pages/Contato';
import Post from 'pages/Post';
import NaoEncontrada from 'pages/NaoEncontrada';
import ScrollToTop from 'components/ScrollToTop';




function App() {
  return (
    <div className="AppRoutes">
      <BrowserRouter>
      <ScrollToTop />
        <Menu />

        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='sobremim' element={<SobreMim />} />
            <Route path='contato' element={<Contato />} />
          </Route>

          <Route path='posts/:id/*' element={<Post />} />
          <Route path='*' element={<NaoEncontrada />} />
        </Routes>

        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default App;
