/* eslint-disable camelcase */
export interface Photo {
  id: string;
  color: string;
  alt_description: string;
  urls: PhotoUrls;
  user: PhotoAuthor;
}

export interface PhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface PhotoAuthor {
 id: string;
 username: string;
 name: string;
 profile_image: {
   small: string;
 }
}

export interface PhotoResult {
  photos: {
    results: Array<Photo>;
  }
}
