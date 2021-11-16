import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";
import Library from "./components/Library";
import Store from "./components/Store";

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Library/> } />
        <Route path='/stores' element={ <Store/> } />
      </Routes>
    </Router>
  );
}

export default App;
