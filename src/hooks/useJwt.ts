import { useState } from 'react';

const useJWT = () => {
  const [jwt, setJwt] = useState('');
  return [jwt, setJwt];
};

// const setJwtInLocalStorage = () => {
//     Storage
// }
export default useJWT;
