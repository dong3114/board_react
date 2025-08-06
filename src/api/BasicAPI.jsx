import axios from "axios";
import { toast } from 'react-toastify';

const BASE_API_URL = import.meta.env.VITE_API_BASE_URL;

const BasicAPI = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // Authorization 헤더 추가 예시
    // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
  },
});

BasicAPI.interceptors.response.use(
  (res) => res,
  (err) => {
    const { response } = err;
    if (!response) {
      toast.error('서버 연결 실패');
    } else {
      switch (response.status) {
        case 401:
          toast.error('로그인이 필요합니다.');
          break;
        case 403:
          toast.error('권한이 없습니다.');
          break;
        case 500:
          toast.error('서버 에러입니다.');
          break;
        default:
          toast.error('알 수 없는 오류입니다.');
      }
    }
    return Promise.reject(err); // 호출부에서 catch로 받게 함
  }
);

export default BasicAPI;