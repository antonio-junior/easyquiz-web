import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.css';
import { PublicQuizesDocument } from '../src/graphql/generated/graphqlGen';
import useSSRQuery from '../src/hooks/useSSRQuery';
import { Quiz } from '../src/models';

type Props = {
  quizes: [Quiz];
};

export const getServerSideProps: GetServerSideProps = async ({
  req: {
    headers: { cookie },
  },
}) => {
  const { data } = await useSSRQuery(cookie || '', PublicQuizesDocument);

  return {
    props: { quizes: data.publicQuizes },
  };
};

function Home({ quizes }: Props) {
  return (
    <div>
      <div className={styles.container}>Available Quizes</div>
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

export default Home;
