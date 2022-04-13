import { useRouter } from 'next/router';

function Quiz() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Quiz: {id}</p>;
}

export default Quiz;
