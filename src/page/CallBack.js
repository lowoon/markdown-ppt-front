import React, { useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';

function CallBack({ history, location, onClick }) {
  useEffect(() => {
    async function getToken() {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      // 이 부분은 express에 요청하여 JWT 토큰을 발급합니다.
      const { token } = await axios.post(`http://localhost:8080/login`, {
        code,
      }).then(res => {
        console.log(res.data);
        return res.data.data;
      })
      .catch(error => history.push("/error"));

      // 유저 JWT 토큰을 저장합니다.
      localStorage.setItem("token", token);
      onClick();
      history.goBack(); // 로그인이 완료되면 보여줄 페이지
    }

    getToken();
  }, [location, history]);

  return null;
}

export default CallBack;
