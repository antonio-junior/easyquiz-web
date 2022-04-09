import { GetServerSideProps } from 'next';
import TableQuiz from '../src/components/TableQuiz';
import {
  PublicQuizesDocument,
  Quiz,
} from '../src/graphql/generated/graphqlGen';
import useSSRQuery from '../src/hooks/useSSRQuery';

type Props = {
  quizes: [Quiz];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await useSSRQuery(PublicQuizesDocument);

  return {
    props: { quizes: data.publicQuizes },
  };
};

function Home({ quizes }: Props) {
  return <TableQuiz quizes={quizes} title='Available Quizes' />;
}

export default Home;
