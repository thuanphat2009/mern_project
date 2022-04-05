import React from "react";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import "./App.css";
import Dangky from "./container/Dangky";
import Dangnhap from "./container/Dangnhap";
import Trangchu from "./container/Trangchu";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Trangchu/>} />
          <Route path="/trangchu"  element={<Trangchu/>} />
          <Route path="/dangnhap" element={<Dangnhap/>} />
          <Route path="/dangky" element={<Dangky/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
