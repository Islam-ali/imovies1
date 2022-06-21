export interface Details {
  adult?:                 boolean;
  backdrop_path?:         string;
  belongs_to_collection?: null;
  budget?:                number;
  genres?:                Genre[];
  homepage?:              string;
  id?:                    number;
  imdb_id?:               string;
  original_language?:     string;
  original_title?:        string;
  overview?:              string;
  popularity?:            number;
  poster_path?:           string;
  production_companies?:  ProductionCompany[];
  production_countries?:  ProductionCountry[];
  release_date?:          Date;
  revenue?:               number;
  runtime?:               number;
  spoken_languages?:      SpokenLanguage[];
  status?:                string;
  tagline?:               string;
  title?:                 string;
  video?:                 boolean;
  vote_average?:          number;
  vote_count?:            number;
  created_by?:           CreatedBy[];
  last_air_date?:        Date;
  last_episode_to_air?:  LastEpisodeToAir;
  next_episode_to_air?:  null;
  origin_country?:       string[];
  original_name?:        string;
  seasons?:              Season[];
}

export interface Genre {
  id?:   number;
  name?: string;
}

export interface ProductionCompany {
  id?:             number;
  logo_path?:      string;
  name?:           string;
  origin_country?: string;
}

export interface ProductionCountry {
  iso_3166_1?: string;
  name?:       string;
}

export interface SpokenLanguage {
  english_name?: string;
  iso_639_1?:    string;
  name?:         string;
}

export interface CreatedBy {
  id:           number;
  credit_id:    string;
  name:         string;
  gender:       number;
  profile_path: string;
}

export interface LastEpisodeToAir {
  air_date:        Date;
  episode_number:  number;
  id:              number;
  name:            string;
  overview:        string;
  production_code: string;
  runtime:         number;
  season_number:   number;
  still_path:      string;
  vote_average:    number;
  vote_count:      number;
}

export interface Season {
  air_date:      Date;
  episode_count: number;
  id:            number;
  name:          string;
  overview:      string;
  poster_path:   string;
  season_number: number;
}
