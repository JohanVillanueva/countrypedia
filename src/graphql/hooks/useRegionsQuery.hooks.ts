import { useLazyQuery } from '@apollo/client';
import { RegionsDTO } from '../models';
import { GET_REGIONS_LIST } from '../queries';

const useRegionsQuery = () => {
  const [getRegions, { data, loading, error }] = useLazyQuery<RegionsDTO>(GET_REGIONS_LIST);

  return {
    getRegions, regionsFromApi: data?.Region, loading, error,
  };
};

export default useRegionsQuery;
