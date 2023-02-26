import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Companent/Home"
 
import Nav from "./Companent/Nav"
import {Routes,Route} from "react-router-dom"
import "./App.css"
function App() {
 
  return (
    <>
 

  <Nav/>
 <Routes>
  <Route path="/" element={<Home/>}/>
 
   
 </Routes>
   
  
    </>
  );
}

export default App;
