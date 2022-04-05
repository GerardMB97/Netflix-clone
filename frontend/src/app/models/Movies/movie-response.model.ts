import { Movie } from "./movies.model";

export interface MovieResponse {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number
}
