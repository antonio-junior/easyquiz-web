import { GetServerSideProps } from 'next';
import TableQuiz from '../src/components/TableQuiz';
import {
  PublicQuizesDocument,
  PublicQuizesQuery,
} from '../src/graphql/generated/graphqlGen';
import useSSRQuery from '../src/hooks/useSSRQuery';
import { Quiz } from '../src/models/Quiz';

type Props = {
  quizes: Quiz[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await useSSRQuery<PublicQuizesQuery>(PublicQuizesDocument);
  const result = data.publicQuizes?.map(
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
  );
  return {
    props: { quizes: result },
  };
};

function Home({ quizes }: Props) {
  return <TableQuiz quizes={quizes} title='Public Quizes' />;
}

export default Home;
