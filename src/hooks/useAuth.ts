import { IncomingMessage } from 'http';
import { DocumentNode } from '@apollo/client';
import useUser, { DecodedUser } from './useUser';
import useSSRQuery from './useSSRQuery';

type Props = {
  req: IncomingMessage;
  query?: DocumentNode | null;
  isLogin?: boolean;
};

const useAuth = async ({ req, query = null, isLogin = false }: Props) => {
  const user: DecodedUser = useUser(req.headers.cookie || '');

  if (!user && !isLogin) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  if (user && isLogin) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  let data = null;

  if (query) {
    const { data: result } = await useSSRQuery(query, req.headers.cookie || '');
    data = result;
  }

  return {
    props: { user, data },
  };
};

export default useAuth;
