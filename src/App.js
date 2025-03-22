
import './App.css';
import Detailed from './pages/Detailed';
import Main from './pages/Main';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import NotFound from './pages/NotFound';


function App() {
  return (
    <Router>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/detailed/:name" element={<Detailed />} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
</Router>
  );
}

export default App;
