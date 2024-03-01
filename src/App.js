import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes,
} from "react-router-dom";
import Video from "./Components/Video/Video";
import { useState } from "react";

function App() {

  const [sidebar,setSidebar] = useState(true)

  return (
    <div className="App">
      <Router>
        <Navbar setSidebar={setSidebar}/>
        <Routes>
          <Route exact path="/" element={<Hero sidebar={sidebar} />}/>
          <Route exact path="/video/:categoryId/:videoId" element={<Video/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
