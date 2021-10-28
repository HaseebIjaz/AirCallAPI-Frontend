// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import subscribeWithPusher from 'src/lib/pusher';
import refreshJWT from 'src/services/refreshJWT';

import Jumbotron from './components/jumbotron';
import LoginForm from './LoginForm';

function Login() {
  const navigate = useNavigate();

  const refreshTokens = async () => {
    const time = 480 * 1000; //7 minutes
    await setTimeout(function () {
      refreshJWT();
      refreshTokens();
    }, time);
  };
  const postLogin = () => {
    refreshTokens();
    subscribeWithPusher();
    navigate('calls');
  };
  return (
    <div className="d-flex flex-column">
      <Jumbotron />
      <h1 className="display-4">Login , Instead ?</h1>
      <LoginForm postLogin={postLogin} />
      <hr className="my-4" />
      <ToastContainer />
    </div>
  );
}

export default Login;
