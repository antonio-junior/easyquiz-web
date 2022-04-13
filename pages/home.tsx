import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import useAuth from '../src/hooks/useAuth';
import { DecodedUser } from '../src/hooks/useUser';
import { MeDocument, MeQuery } from '../src/graphql/generated/graphqlGen';
import Header from '../src/components/Header';
import TableQuiz from '../src/components/TableQuiz';
import { Quiz } from '../src/models/Quiz';

type Props = {
  user: DecodedUser;
  data: MeQuery;
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  return useAuth({ req: ctx.req, query: MeDocument });
};

function UserHome({ user, data }: Props) {
  const result = data?.me?.quizes?.map(
    ({ id, title, dtExpiration, answersCount, status, owner }) => {
      return {
        id,
        title,
        dtExpiration,
        answersCount,
        status,
        owner: owner.name,
      };
    }
  ) as Quiz[];

  return (
    <div>
      <Header userName={user?.email} />
      <TableQuiz title='Your Quizes' quizes={result} />
    </div>
  );
}

export default UserHome;
