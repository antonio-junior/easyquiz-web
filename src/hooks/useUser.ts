import cookie from 'cookie';
import jwtDecode from 'jwt-decode';

export type DecodedUser = {
  email: string;
  userId: number;
} | null;

const useUser = (strCookie: string): DecodedUser | null => {
  const cookies = cookie.parse(strCookie);

  const jwtCookie = cookies['_JWT_COOKIE'];

  if (jwtCookie) return jwtDecode(jwtCookie) as DecodedUser;

  return null;
};

export default useUser;
