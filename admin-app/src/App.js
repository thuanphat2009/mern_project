import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dangky from "./container/Dangky";
import Dangnhap from "./container/Dangnhap";
import Trangchu from "./container/Trangchu";
import PrivateRoute from "./components/HOC/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Trangchu />} />
          </Route>
          <Route exact path="/trangchu" element={<PrivateRoute />}>
            <Route exact path="/trangchu" element={<Trangchu />} />
          </Route>
          <Route path="/dangnhap" element={<Dangnhap />} />
          <Route path="/dangky" element={<Dangky />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
