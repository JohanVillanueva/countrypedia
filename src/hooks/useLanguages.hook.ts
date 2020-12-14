import { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import { useLanguagesQuery } from '../graphql/hooks';
import { AppState, FilterOption, Language } from '../models';

const useLanguages = () => {
  const { languages, setStateData } = useContext<AppState>(AppContext);
  const {
    getLanguages, languagesFromApi, loading, error,
  } = useLanguagesQuery();

  useEffect(() => {
    if (!loading) {
      if (!languagesFromApi) {
        getLanguages();
      } else if (!languages?.length) {
        setStateData({
          languages: languagesFromApi,
        });
      }
    }
  }, [languagesFromApi]);

  const getLanguageFilterOptions = (languageList: Array<Language>): Array<FilterOption> => {
    const options:Array<FilterOption> = languageList?.map((language) => ({
      value: language.name,
      label: language.nativeName,
      data: language,
    }));

    return options;
  };

  return {
    languages,
    optionsForFilter: getLanguageFilterOptions(languages),
    loading,
    error,
  };
};

export default useLanguages;
