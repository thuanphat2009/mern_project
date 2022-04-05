import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import { Link,Navigate } from "react-router-dom";
import { isUserLoggedIn, login } from "../../actions";
import {useDispatch, useSelector} from 'react-redux';

function Dangnhap() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }
  }, []);
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email, password
    };
    dispatch(login(user));
  };
  if(auth.authenticate){
    return <Navigate to={`/`} />
  }
  return (
    <Layout>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="login100-pic js-tilt" data-tilt>
              <img src="./images/img-01.png" alt="IMG" />
            </div>
            <form onSubmit={userLogin} className="login100-form validate-form">
              <span className="login100-form-title">Đăng nhập admin</span>
              <div
                className="wrap-input100 validate-input"
                data-validate="Email phải có định dạng: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) =>setEmail(e.target.value)}
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
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) =>setPassword(e.target.value)}

                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true" />
                </span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Đăng nhập</button>
              </div>
              <div className="text-center p-t-136">
                <Link className="txt2" to="/Dangky">
                  Tạo tài khoản
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

export default Dangnhap;
