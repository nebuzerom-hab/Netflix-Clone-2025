
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
  <Router basename="/Netflix-Clone-2025">
    <Routes>
      <Route path="/" element={<WhoIsWatching />} />
      {/* <Route path="/" element={<WhoIsWatching />} /> */}
      <Route path="/Login/:user" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Trail/:movieId" element={<Trail />} />
    </Routes>
  </Router>
);
}

export default App
