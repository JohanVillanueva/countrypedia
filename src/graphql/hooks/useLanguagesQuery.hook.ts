import { useLazyQuery } from '@apollo/client';
import { LanguagesDTO } from '../models';
import { GET_LANGUAGES_LIST } from '../queries';

const useLanguagesQuery = () => {
  const [getLanguages, { data, loading, error }] = useLazyQuery<LanguagesDTO>(GET_LANGUAGES_LIST);

  return {
    getLanguages, languagesFromApi: data?.Language, loading, error,
  };
};

export default useLanguagesQuery;
