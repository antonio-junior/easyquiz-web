import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ListContainer = styled.div`
  font-family: 'Roboto Slab', serif;
  color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PollSetItem = styled.div`
  padding: 12px;
  border-radius: 20px;
  background-color: #fff;
  width: 80%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 7px 0px #aaa;
  flex-wrap: wrap;
  align-items: baseline;

  h4 {
    width: 80%;
  }
`;

const PollItemMainContent = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;

interface LabelStatus {
  status: string;
}
const LabelStatus = styled.span`
  color: #fff;
  padding: 4px;
  border-radius: 5px;
  background-color: ${(props: LabelStatus) => {
    const colors = [
      { status: 'ACTIVE', color: '#a2d26e' },
      { status: 'CLOSED', color: '#fa7056' },
      { status: 'PAUSED', color: '#878b8e' }
    ];

    return colors.find(({ status }) => status === props.status)?.color;
  }};
`;

const ActionButton = styled.div`
  cursor: pointer;
`;

const USER_POLLS = gql`
  query pollsets {
    pollsets {
      id
      title
      uuid
      status
      allowpublic
      dtExpiration
      polls {
        id
        question
        maxselections
        rightanswer
        alternatives {
          id
          description
        }
      }
      totalAnswers
    }
  }
`;

interface TAlternative {
  id: number;
  description: string;
}
interface TPoll {
  id: number;
  question: string;
  maxselections: number;
  rightanswer: number;
  alternatives: TAlternative[];
}
interface TPollSet {
  id: number;
  title: string;
  uuid: string;
  status: string;
  allowpublic: boolean;
  dtExpiration: string;
  totalAnswers: number;
  polls: TPoll[];
}
interface TData {
  pollsets: TPollSet[];
}

const PollList = () => {
  const { loading, error, data } = useQuery<TData>(USER_POLLS);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ListContainer>
      {data?.pollsets.map(({ id, polls, title, uuid, status, allowpublic, dtExpiration, totalAnswers }) => (
        <PollSetItem key={id}>
          {/* <TDAction>
                <ActionButton>
                  <i className='las la-edit' />
                </ActionButton>
                <ActionButton>
                  <i className='las la-pause-circle' />
                </ActionButton>
                <ActionButton>
                  <i className='las la-window-close' />
                </ActionButton>
                <ActionButton>
                  <a href={`http://www-${uuid}`} title='Go to Poll'>
                    <i className='las la-link' />
                  </a>
                </ActionButton>
                <ActionButton>
                  <i className='las la-clipboard' />
                </ActionButton>
                <ActionButton>
                  <i className='las la-eye' />
                </ActionButton>
              </TDAction> */}
          <h4>
            {title} - {polls[0].question}
          </h4>
          <div>
            <LabelStatus status={status}>{status}</LabelStatus>
          </div>
          <PollItemMainContent>
            <div>Due: {dtExpiration}</div>

            <div>{allowpublic ? 'PUBLIC' : 'PRIVATE'} | </div>
            <div>{dtExpiration || '-'} |</div>
            <div>{totalAnswers} answers</div>
          </PollItemMainContent>
        </PollSetItem>
      ))}
    </ListContainer>
  );
};

export default PollList;
