import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/header';
import { AllCats } from './pages/allCats';
import { FavouriteCats } from './pages/favouriteCats';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/all" element={<AllCats/>} />
        <Route path="/favourite" element={<FavouriteCats/>} />
        <Route path="/*" element={<AllCats/>} />
      </Routes>
    </div>
  );
}

export default App;
