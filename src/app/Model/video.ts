export interface Video {
  id?:      number;
  results?: ResultVideo[];
}

export interface ResultVideo {
  iso_639_1?:    string;
  iso_3166_1?:   string;
  name?:         string;
  key?:          string;
  site?:         string;
  size?:         number;
  type?:         string;
  official?:     boolean;
  published_at?: Date;
  id?:           string;
}
