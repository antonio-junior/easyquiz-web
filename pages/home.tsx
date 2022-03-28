import { GetServerSideProps } from 'next';
import useSSRQuery from '../src/hooks/useSSRQuery';
import useUser, { DecodedUser } from '../src/hooks/useUser';
import { MyQuizesDocument } from '../src/graphql/generated/graphqlGen';
import { Quiz } from '../src/models';

type Props = {
  user: DecodedUser;
  quizes: [Quiz];
};

export const getServerSideProps: GetServerSideProps = async ({
  req: {
    headers: { cookie },
  },
}) => {
  const user: DecodedUser = useUser(cookie || '');

  if (user) {
    const { data } = await useSSRQuery(cookie || '', MyQuizesDocument);

    return {
      props: { user, quizes: data.myQuizes },
    };
  }
  return {
    redirect: {
      destination: '/login',
      permanent: false,
    },
  };
};

function UserHome({ user, quizes }: Props) {
  return (
    <div>
      <h1>Your Profile, {user?.email}</h1>
      <h2>Your Quizes</h2>
      <ul>
        {quizes?.map(quiz => (
          <li key={quiz.id}>
            {quiz.title} - Owner: {quiz.owner.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserHome;
