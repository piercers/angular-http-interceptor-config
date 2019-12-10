import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorsHttpInterceptorService } from './errors-http-interceptor.service';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ErrorsHttpInterceptorService,
        multi: true,
    },
];
