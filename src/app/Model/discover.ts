export interface Discover {
  page?:          number;
  results?:       Result[];
  total_pages?:   number;
  total_results?: number;
}
export interface Result {
  adult?:             boolean;
  backdrop_path?:     string;
  genre_ids?:         number[];
  id?:                number;
  original_language?: OriginalLanguage;
  original_title?:    string;
  overview?:          string;
  popularity?:        number;
  poster_path?:       string;
  release_date?:      Date;
  title?:             string;
  video?:             boolean;
  vote_average?:      number;
  vote_count?:        number;
  media_type?:    string;
  season_number?:number;
  episode_number?:number;
  still_path?:    string;
  original_name?:   string;
  name?:    string;
}

export enum OriginalLanguage {
  En = "en",
  Ja = "ja",
}
