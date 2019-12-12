import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorsHttpInterceptorService } from './errors-http-interceptor.service';
import { Http404HandlerService } from './http-404-handler.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    Http404HandlerService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorsHttpInterceptorService,
        multi: true,
    },
];
