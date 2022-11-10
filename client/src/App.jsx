import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/home';
import New from './pages/new';
import Detail from './pages/detail';

function App() {
  return (
    <fieldset>
    <legend>App.jsx</legend>
    <h1>Favorite Pirates</h1>
    <Routes>
      <Route path="/" element={<Navigate to ="/pirates" />} />
      <Route path="/pirates" element={<Home />} />
      <Route path="/pirates/new" element={<New />} /> 
      <Route path="/pirates/:pirate_id" element={<Detail />} />
    </Routes>
  </fieldset>
  );
}

export default App;
