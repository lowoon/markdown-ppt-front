import React, { useEffect, useState } from 'react';
import './App.css';
import './reset.css';
import { Route } from 'react-router-dom';
import Home from './page/Home';
import CallBack from './page/CallBack';
import Header from './page/Header';
import SignUp from './page/SignUp';
import MyPage from './page/MyPage';
import Editor from './page/Editor';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const getToken = () => {
      setToken(localStorage.getItem("token"));
    }
    getToken();
  }, [token]);

  const onClickLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setToken(localStorage.getItem("token"));
  }

  const onClickLogIn = () => {
    setToken(localStorage.getItem("token"));
  }

  return (
    <>
      <Header token={token}
              onClick={onClickLogOut}/>
      <Route path={"/"} exact component={Home}/>
      <Route path={"/sign-up"} exact component={SignUp}/>
      <Route path={"/callback"}
             render={(props) => <CallBack {...props} onClick={onClickLogIn}/>}/>
      <Route path={"/my-page"} exact component={MyPage}/>
      <Route path={"/editor"} exact component={Editor}/>
    </>
  );
}

export default App;
