import { useContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { GlobalContext } from './context/provider';
import Navbar from './components/navbar';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import SearchResultPage from './pages/SearchResult';
import './styles/main.css';
import Loader from './components/loader';

function App() {
  const {loading} = useContext(GlobalContext);

  return (
    <>
      <Router>
        <Navbar />
        {loading && <Loader />}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/movie/:movieIndex' element={<DetailsPage />} />
          <Route exact path='/search/:query' element={<SearchResultPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;