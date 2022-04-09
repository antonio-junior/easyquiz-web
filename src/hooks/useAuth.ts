import { IncomingMessage } from 'http';
import useUser, { DecodedUser } from './useUser';

const useAuth = ({ req }: { req: IncomingMessage }) => {
  const user: DecodedUser = useUser(req.headers.cookie || '');

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
};

export default useAuth;
