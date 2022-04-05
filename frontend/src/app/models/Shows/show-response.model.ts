import { Show } from "./show.model";

export interface ShowResponse {
    page: number,
    results: Show[],
    total_pages: number,
    total_results: number
}
