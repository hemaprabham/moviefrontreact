import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewmovie from './components/Viewmovie';
import Addmovie from './components/Addmovie';
import Searchmovie from './components/Searchmovie';
import Deletemovie from './components/Deletemovie';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='view' element={<Viewmovie/>}/>
        <Route path='' element={<Addmovie/>}/>
        <Route path='search' element={<Searchmovie/>}/>
        <Route path='delete' element={<Deletemovie/>}/>



      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
