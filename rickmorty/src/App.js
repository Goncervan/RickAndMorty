import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Locations from './components/Locations/Locations';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';
import './scss/app.scss'
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/locations' element={<Locations />} />
          <Route exact path='/characters' element={<Characters />} />
          <Route exact path='/episodes' element={<Episodes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
