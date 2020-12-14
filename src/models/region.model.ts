export interface GeographicRegion {
  name: string;
  subregions: Array<GeographicSubRegion>;
}

export interface GeographicSubRegion {
  name: string;
  region: GeographicRegion;
}
