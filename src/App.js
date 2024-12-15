import './App.css';
import {Routes, Route, Link, NavLink} from 'react-router-dom';
import Time from './Components/Time/Time';
import Seconds from './Components/Seconds/Seconds';
import Timer from './Components/Timer/Timer';
function App() {
  return (
    <div className="App">
      <div className='menu'>
      <NavLink to='/time'>Saat</NavLink>
      <NavLink to='/seconds'>Saniyəölçən</NavLink>
      <NavLink to='/timer'>Taymer</NavLink>
      </div>

     <Routes>
        <Route path='/time' element={<Time />} />
        <Route path='/seconds' element={<Seconds />} />
        <Route path='/timer' element={<Timer />} />
     </Routes>
    </div>
  );
}

export default App;
