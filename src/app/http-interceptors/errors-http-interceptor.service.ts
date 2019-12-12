import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Http404HandlerService } from './http-404-handler.service';

@Injectable()
export class ErrorsHttpInterceptorService implements HttpInterceptor {
    constructor(private http404: Http404HandlerService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        console.log(`[ErrorsHttpInterceptorService] req: `, req);
        return next.handle(req).pipe(
            tap((res) =>
                console.log(`[ErrorsHttpInterceptorService] res: `, res),
            ),
            catchError((error) => {
                const errorIs404 = true;
                if (errorIs404) {
                    return this.http404.handle(error);
                }
                console.log(`[ErrorsHttpInterceptorService] caught: `, error);
                return throwError(error);
            }),
        );
    }
}
