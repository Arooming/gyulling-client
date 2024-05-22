import { useEffect } from 'react';
import { CODE, GET_ACCESS_TOKEN_URL } from '../../constants/oAuth';
import { api } from '../api';

const useKakaoLogin = () => {
  useEffect(() => {
    if (CODE) {
      api.post(GET_ACCESS_TOKEN_URL).then((res) => {
        const { access_token } = res.data;
        console.log(access_token, CODE);
      });
    }
  }, [CODE]);

  return <div></div>;
};

export default useKakaoLogin;
