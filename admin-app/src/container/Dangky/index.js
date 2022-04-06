import React, { useState } from "react";
import Layout from "../../components/layout";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singup } from "../../actions";

function Dangky() {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const userSingup = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    dispatch(singup(user));
  };
  if (auth.authenticate) {
    return <Navigate to={`/`} />;
  }
  if (user.loading) {
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="loadingio-spinner-ripple-y3j81fen75h">
          <div className="ldio-h6dxgeyijy5">
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
  return (
    <Layout>
       
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="./images/img-01.png" alt="IMG" />
            </div>
            <form onSubmit={userSingup} className="login100-form validate-form">
              <span className="login100-form-title">Đăng ký admin</span>
              <span className="text-success fw-bold">{user.message}</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Tên không được bỏ trống"
              >
                <input
                  value={name}
                  className="input100"
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-id-card" aria-hidden="true" />
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Email phải có định dạng: ex@abc.xyz"
              >
                <input
                  value={email}
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>
              <div
                className="wrap-input100 validate-input"
                data-validate="Mật khẩu không được bỏ trống"
              >
                <input
                  value={password}
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Mật khẩu"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Đăng ký</button>
              </div>
              <div className="text-center p-t-136">
                <Link className="txt2" to="/Dangnhap">
                  Đăng nhập ngay
                  <i
                    className="fa fa-long-arrow-right m-l-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dangky;
