export interface GeographicRegion {
  name: string;
  subregions: Array<GeographicSubRegion>;
}

export interface GeographicSubRegion {
  name: string;
  region: GeographicRegion;
}
export interface RegionalBloc {
  name: string;
  acronym: string;
}
