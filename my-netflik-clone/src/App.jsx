
import './App.css'
import Home from "./Components/Pages/Home/Home.jsx"
import {
  BrowserRouter as Router,
  Routes,
  Route,} from "react-router-dom";
import Trail from './Components/Trail/Trail';
import WhoIsWatching from "./Components/Whois/Whois";
import Login from "./Components/Pages/Login/Login";




function App() {
  
return (
  <Router>
    <Routes>
      <Route path="/Netflix-Clone-2025" element={<WhoIsWatching />} />
      {/* <Route path="/" element={<WhoIsWatching />} /> */}
      <Route path="/Login/:user" element={<Login />} />
      <Route path="/Netflix-Clone-2025/Home" element={<Home />} />
      <Route path="/Trail/:movieId" element={<Trail />} />
    </Routes>
  </Router>
);
}

export default App
