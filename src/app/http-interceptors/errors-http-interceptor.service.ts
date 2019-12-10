import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsHttpInterceptorService implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        console.log(`ErrorsHttpInterceptorService req: `, req);
        return next.handle(req).pipe(
            catchError((error) => {
                console.log(`ErrorsHttpInterceptor caught: `, error);
                return of(error);
            }),
        );
    }
}
