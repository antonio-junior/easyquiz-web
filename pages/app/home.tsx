import { useEffect } from 'react';
import { MyQuizesDocument, Quiz } from '../src/graphql/generated/graphqlGen';
import Header from '../src/components/Header';
import TableQuiz from '../src/components/TableQuiz';
import useSSRQuery from '../src/hooks/useSSRQuery';

async function UserHome() {
  const { data } = await useSSRQuery(cookie || '', MyQuizesDocument);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div>
      <Header userName={user?.email} />
      <TableQuiz quizes={quizes} title='Your Quizes' />;
    </div>
  );
}

export default UserHome;
