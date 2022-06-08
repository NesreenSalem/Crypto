
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route,  Routes }
 from "react-router-dom";
 import Home from "./Routes/Home";
import CoinPage from "./Routes/CoinPage"; 

function App() {
  return (
   <div className="App">
     <Router>
      
         <Routes>
         <Route path="/" exact render={(props) => 
          <Home></Home>}> 
          </Route>

          <Route path="/CoinPage/:id" 
           exact render={(props) =><CoinPage></CoinPage> }>
             
           </Route>
         </Routes>
          
     </Router>
   </div>
  );
}

export default App;
