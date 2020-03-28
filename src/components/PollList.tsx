import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  font-family: 'Roboto Slab', serif;
  color: #000;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  table {
    width: 80%;
    text-align: center;
  }

  tbody {
    background-color: white;
  }

  tr {
    line-height: 2;
  }

  thead {
    color: white;
    background-color: #008394;
    font-weight: 700;
    text-transform: uppercase;
  }
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
      { status: 'SUSPENDED', color: '#878b8e' }
    ];
    const [item] = colors.filter(i => i.status === props.status);
    return item.color;
  }};
`;

interface Poll {
  id: number;
  question: string;
  uuid: string;
  status: string;
  allowPublic: boolean;
  createdAt: string;
  expiration: string | null;
  totalVotes: number;
}
const polls: Poll[] = [
  {
    id: 1,
    question: 'Lorem ipsum dolor seti apis ?',
    uuid: '12312-1312312-123322',
    status: 'ACTIVE',
    allowPublic: true,
    createdAt: '23/10/2019',
    expiration: '01/06/2020 21:00',
    totalVotes: 223
  },
  {
    id: 2,
    question: 'Lorem ipsum dolor seti apis ?',
    uuid: '12312-1312312-123322',
    status: 'CLOSED',
    allowPublic: false,
    createdAt: '23/10/2019',
    expiration: null,
    totalVotes: 223
  },
  {
    id: 3,
    question: 'Lorem ipsum dolor seti apis ?',
    uuid: '12312-1312312-123322',
    status: 'SUSPENDED',
    allowPublic: true,
    createdAt: '23/10/2019',
    expiration: null,
    totalVotes: 223
  }
];

const PollList = () => {
  return (
    <ListContainer>
      <table>
        <thead>
          <tr>
            <td>Actions</td>
            <td>Description</td>
            <td>Created at</td>
            <td>Status</td>
            <td>Public</td>
            <td>Expires at</td>
            <td>Votes</td>
          </tr>
        </thead>
        <tbody>
          {polls.map(({ id, question, uuid, status, allowPublic, createdAt, expiration, totalVotes }) => (
            <tr key={id}>
              <td>
                <a href='/'>
                  <i className='las la-edit' />
                </a>
                <a href='/'>
                  <i className='las la-pause-circle' />
                </a>
                <a href='/'>
                  <i className='las la-window-close' />
                </a>
                <a href='/'>
                  <i className='las la-link' />
                </a>
                <a href='/'>
                  <i className='las la-clipboard' />
                </a>
              </td>
              <td>{question}</td>
              <td>{createdAt}</td>
              <td>
                <LabelStatus status={status}>{status}</LabelStatus>
              </td>
              <td>{String(allowPublic)}</td>
              <td>{expiration || 'Not expires'}</td>
              <td>{totalVotes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ListContainer>
  );
};

export default PollList;
