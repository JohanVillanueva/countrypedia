import { useEffect, useState } from 'react';
import { Photo, PhotoResult } from '../models';

const API_AUTH_TOKEN = process.env.UNSPLASH_AUTH_TOKEN;

const BASE_API_URL = 'https://api.unsplash.com/search';
const API_SEARCH_QUERY_PARAMS = `?per_page=1&client_id=${API_AUTH_TOKEN}&featured&query=`;

const SEARCH_IMAGE_URL = BASE_API_URL + API_SEARCH_QUERY_PARAMS;

const useCountryImageSearch = (keyword: string) => {
  const [photo, setPhoto] = useState<Photo>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (keyword && !loading) {
      const url: string = SEARCH_IMAGE_URL + keyword;

      fetch(url)
        .then((response) => response.json())
        .then(({ photos }: PhotoResult) => {
          setLoading(false);
          const bestPhoto = photos?.results[0];
          if (bestPhoto) {
            setPhoto(bestPhoto);
          }
        })
        .catch(() => setError(true));
    }
  }, [keyword]);

  return {
    photo,
    loading,
    error,
  };
};

export default useCountryImageSearch;
