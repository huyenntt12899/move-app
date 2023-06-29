export interface IDataUpComing {
  dates: IDates;
  page: number;
  results: IResult[];
  total_pages: number;
  total_results: number;
}

interface IResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface IDates {
  maximum: string;
  minimum: string;
}
