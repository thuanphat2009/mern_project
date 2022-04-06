import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dangky from "./container/Dangky";
import Dangnhap from "./container/Dangnhap";
import Trangchu from "./container/Trangchu";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { isUserLoggedIn } from "./actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, []);
  return (
    <div className="App">

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
    </div>
  );
}

export default App;
