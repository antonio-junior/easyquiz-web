import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useEffect, useState } from 'react';
import useSSRQuery from '../src/hooks/useSSRQuery';
import useAuth from '../src/hooks/useAuth';
import { DecodedUser } from '../src/hooks/useUser';
import { MeDocument, Quiz } from '../src/graphql/generated/graphqlGen';
import Header from '../src/components/Header';
import TableQuiz from '../src/components/TableQuiz';

type Props = {
  user: DecodedUser;
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return useAuth(ctx);
};

function UserHome({ user }: Props) {
  const [quizes, setQuizes] = useState<Quiz[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await useSSRQuery(MeDocument);
      setQuizes(data.me.quizes);
    };

    getData();
  }, []);

  return (
    <div>
      <Header userName={user?.email} />
      <TableQuiz title='Your Quizes' quizes={quizes} />
    </div>
  );
}

export default UserHome;
