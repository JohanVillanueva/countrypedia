import { ApolloError, DocumentNode, useLazyQuery } from '@apollo/client';

type GenericQuery<T> = [
  getData: () => void,
  data: T,
  loading: boolean,
  error: ApolloError
]

const useGenericQuery = <T>(query: DocumentNode): GenericQuery<T> => {
  const [getData, { loading, error, data }] = useLazyQuery<T>(query);

  return [getData, data, loading, error];
};

export default useGenericQuery;
