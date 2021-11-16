import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/index";

//<Route path='/cats' component={Cats} />
function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' />
      </Routes>
    </Router>
  );
}

export default App;
