import { HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

export class HttpService {
    public handleError(error: HttpErrorResponse): Observable<Error> {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
        return throwError(errorMessage);
      }
}
