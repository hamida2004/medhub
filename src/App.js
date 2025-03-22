import './App.css';
import Detailed from './pages/Detailed';
import Main from './pages/Main';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detailed/:name" element={<Detailed />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
