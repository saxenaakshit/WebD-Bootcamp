import { Link, Route, Routes,NavLink } from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import { MainHeader } from "./components/MainHeader";

function App() {
  return <div className="App">
<ul>
  <li>
    <NavLink to="/">Home</NavLink>
  </li>
  <li>
    <NavLink to="/about">About</NavLink>
  </li>
  <li>
    <NavLink to="/support">Support</NavLink>
  </li>
  <li>
    <Link to="/labs">Labs</Link>
  </li>
  <li>
    <Link to="*">Not found</Link>
  </li>
</ul>
  <nav>

  </nav>
  <Routes>
    <Route path="/" element={<MainHeader></MainHeader>}>
    <Route index element={<Home/>} />
    <Route path="/support" element={<Support></Support>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/labs" element={<Labs></Labs>}></Route>
    <Route path="*" element={<NotFound></NotFound>}></Route>
    </Route>
  </Routes>
  
  
  
  
  </div>;
  
}

export default App;
