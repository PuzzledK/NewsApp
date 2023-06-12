import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { News } from "./components/News";
import './App.css';
function App() {
  return (
    <BrowserRouter>
       <Navbar title='NewsApp'/>
       <News/>
    </BrowserRouter>
  );
}

export default App;
