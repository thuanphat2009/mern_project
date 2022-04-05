import React from 'react';
import {Navigate,Outlet} from 'react-router-dom';

const PrivateRoute = () => {
    const auth = window.localStorage.getItem('token'); 
    return auth ? <Outlet /> : <Navigate to={`/dangnhap`} />;
  }
export default PrivateRoute;
// const PrivateRoute = ({outlet: Outlet, ...rest}) => {
//     return  <Outlet {...rest} outlet = {(props) => {
//         const token = window.localStorage.getItem('token');
//         if(token){
//             return <Outlet {...props} />
//         }else{
//             return <Redirect to={`/dangnhap`} />;
//         }
//     }} />
  
// }

// export default PrivateRoute;