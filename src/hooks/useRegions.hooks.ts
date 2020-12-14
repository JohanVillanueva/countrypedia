import { useContext, useEffect } from 'react';
import { AppContext } from '../context';
import { useRegionsQuery } from '../graphql/hooks';
import {
  AppState, FilterOption, GeographicRegion,
} from '../models';

const useRegions = () => {
  const { regions, setStateData } = useContext<AppState>(AppContext);
  const {
    getRegions, regionsFromApi, loading, error,
  } = useRegionsQuery();

  useEffect(() => {
    if (!loading) {
      if (!regionsFromApi) {
        getRegions();
      } else if (!regions?.length) {
        setStateData({
          regions: regionsFromApi,
        });
      }
    }
  }, [regionsFromApi]);

  const getRegionFilterOptions = (regionList: Array<GeographicRegion>): Array<FilterOption> => {
    const options:Array<FilterOption> = regionList?.map((region) => ({
      value: region.name,
      label: region.name,
      data: region,
    }));

    return options;
  };

  return {
    regions,
    optionsForFilter: getRegionFilterOptions(regions),
    loading,
    error,
  };
};

export default useRegions;
