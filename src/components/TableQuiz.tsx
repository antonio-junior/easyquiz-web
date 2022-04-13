import Link from 'next/link';
import Title from './Title';
import { Quiz } from '../models/Quiz';

type Props = {
  quizes: Quiz[] | null | undefined;
  title: string;
};

function Home({ title, quizes }: Props) {
  return (
    <div>
      <div className='container mx-auto px-4 sm:px-8 max-w-3xl'>
        <div className='py-8'>
          <Title text={title} />
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Created by
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Expires at
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Answers
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {quizes?.map(quiz => (
                    <Link key={quiz.id} href={`/quiz/${quiz.id}`}>
                      <tr className='border-b transition duration-300 ease-in-out cursor-pointer bg-white hover:bg-gray-100'>
                        <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            {quiz.title}
                          </p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            {quiz.owner}
                          </p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            {quiz.dtExpiration}
                          </p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                          <p className='text-gray-900 whitespace-no-wrap'>
                            {' '}
                            {quiz.answersCount}
                          </p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 text-sm'>
                          <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                            <span
                              aria-hidden='true'
                              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                            />
                            <span className='relative'> {quiz.status}</span>
                          </span>
                        </td>
                      </tr>
                    </Link>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
