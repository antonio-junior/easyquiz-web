import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Alternative = {
  __typename?: 'Alternative';
  id: Scalars['ID'];
  isRight?: Maybe<Scalars['Boolean']>;
  text: Scalars['String'];
};

export type AlternativeInput = {
  isRight?: InputMaybe<Scalars['Boolean']>;
  text: Scalars['String'];
};

export type Answer = {
  __typename?: 'Answer';
  choice: Alternative;
  question: Question;
};

export type AnswerInput = {
  choice: Scalars['Int'];
  questionId: Scalars['ID'];
};

export type Invite = {
  __typename?: 'Invite';
  email: Scalars['String'];
  quizId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addInvite: Quiz;
  addQuiz?: Maybe<Quiz>;
  addResult?: Maybe<Result>;
  addUser?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  updateAlternative: Alternative;
  updateQuestion: Question;
  updateQuiz: Quiz;
  updateUser?: Maybe<User>;
};

export type MutationAddInviteArgs = {
  email: Scalars['String'];
  quizId: Scalars['ID'];
};

export type MutationAddQuizArgs = {
  expiration?: InputMaybe<Scalars['String']>;
  isPublic: Scalars['Boolean'];
  questions: Array<InputMaybe<QuestionInput>>;
  showPartial: Scalars['Boolean'];
  title: Scalars['String'];
};

export type MutationAddResultArgs = {
  answers: Array<InputMaybe<AnswerInput>>;
  quizId: Scalars['ID'];
};

export type MutationAddUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationUpdateAlternativeArgs = {
  id: Scalars['ID'];
  isRight?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['String']>;
};

export type MutationUpdateQuestionArgs = {
  id: Scalars['ID'];
  query: Scalars['String'];
};

export type MutationUpdateQuizArgs = {
  dtExpiration?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  isPublic?: InputMaybe<Scalars['Boolean']>;
  showPartial?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  answeredQuizes?: Maybe<Array<Quiz>>;
  availableToAnswer?: Maybe<Array<Quiz>>;
  me?: Maybe<User>;
  myQuizes?: Maybe<Array<Quiz>>;
  publicQuizes?: Maybe<Array<Quiz>>;
  quiz?: Maybe<Quiz>;
  result?: Maybe<Array<Maybe<Result>>>;
};

export type QueryQuizArgs = {
  id: Scalars['ID'];
};

export type QueryResultArgs = {
  id: Scalars['ID'];
};

export type Question = {
  __typename?: 'Question';
  alternatives: Array<Alternative>;
  correctAlternatives: Array<Scalars['Int']>;
  id: Scalars['ID'];
  query: Scalars['String'];
};

export type QuestionInput = {
  alternatives: Array<InputMaybe<AlternativeInput>>;
  query: Scalars['String'];
};

export type Quiz = {
  __typename?: 'Quiz';
  dtExpiration?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPublic?: Maybe<Scalars['Boolean']>;
  owner: User;
  questions: Array<Question>;
  showPartial?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  uuid?: Maybe<Scalars['String']>;
};

export type Result = {
  __typename?: 'Result';
  answers: Array<Answer>;
  id: Scalars['ID'];
  user: User;
};

export type Subscription = {
  __typename?: 'Subscription';
  invited: Quiz;
};

export type SubscriptionInvitedArgs = {
  email: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  quizes?: Maybe<Array<Quiz>>;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: 'Query';
  me?: { __typename?: 'User'; name: string; email: string } | null;
};

export type PublicQuizesQueryVariables = Exact<{ [key: string]: never }>;

export type PublicQuizesQuery = {
  __typename?: 'Query';
  publicQuizes?: Array<{
    __typename?: 'Quiz';
    id: string;
    title: string;
    dtExpiration?: string | null;
    owner: { __typename?: 'User'; name: string };
  }> | null;
};

export type MyQuizesQueryVariables = Exact<{ [key: string]: never }>;

export type MyQuizesQuery = {
  __typename?: 'Query';
  myQuizes?: Array<{
    __typename?: 'Quiz';
    id: string;
    title: string;
    dtExpiration?: string | null;
    owner: { __typename?: 'User'; name: string };
  }> | null;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login?: { __typename?: 'User'; id: string; name: string } | null;
};

export const MeDocument = gql`
  query Me {
    me {
      name
      email
    }
  }
`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export function useMeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const PublicQuizesDocument = gql`
  query publicQuizes {
    publicQuizes {
      id
      owner {
        name
      }
      title
      dtExpiration
    }
  }
`;

/**
 * __usePublicQuizesQuery__
 *
 * To run a query within a React component, call `usePublicQuizesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublicQuizesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublicQuizesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePublicQuizesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PublicQuizesQuery,
    PublicQuizesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PublicQuizesQuery, PublicQuizesQueryVariables>(
    PublicQuizesDocument,
    options
  );
}
export function usePublicQuizesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublicQuizesQuery,
    PublicQuizesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PublicQuizesQuery, PublicQuizesQueryVariables>(
    PublicQuizesDocument,
    options
  );
}
export type PublicQuizesQueryHookResult = ReturnType<
  typeof usePublicQuizesQuery
>;
export type PublicQuizesLazyQueryHookResult = ReturnType<
  typeof usePublicQuizesLazyQuery
>;
export type PublicQuizesQueryResult = Apollo.QueryResult<
  PublicQuizesQuery,
  PublicQuizesQueryVariables
>;
export const MyQuizesDocument = gql`
  query myQuizes {
    myQuizes {
      id
      owner {
        name
      }
      title
      dtExpiration
    }
  }
`;

/**
 * __useMyQuizesQuery__
 *
 * To run a query within a React component, call `useMyQuizesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQuizesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQuizesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQuizesQuery(
  baseOptions?: Apollo.QueryHookOptions<MyQuizesQuery, MyQuizesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MyQuizesQuery, MyQuizesQueryVariables>(
    MyQuizesDocument,
    options
  );
}
export function useMyQuizesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyQuizesQuery,
    MyQuizesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MyQuizesQuery, MyQuizesQueryVariables>(
    MyQuizesDocument,
    options
  );
}
export type MyQuizesQueryHookResult = ReturnType<typeof useMyQuizesQuery>;
export type MyQuizesLazyQueryHookResult = ReturnType<
  typeof useMyQuizesLazyQuery
>;
export type MyQuizesQueryResult = Apollo.QueryResult<
  MyQuizesQuery,
  MyQuizesQueryVariables
>;
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      name
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;
