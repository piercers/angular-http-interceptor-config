import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http404HandlerService } from '../http-interceptors/http-404-handler.service';
import { of } from 'rxjs';

class CustomHttp404HandlerService {
    handle(error?: any) {
        console.log('[CustomErrorHandler] Handled 404: ', error);
        return of(error);
    }
}

@Component({
    selector: 'app-custom-error-handler',
    templateUrl: './custom-error-handler.component.html',
    styleUrls: ['./custom-error-handler.component.css'],
    providers: [
        {
            provide: Http404HandlerService,
            useClass: CustomHttp404HandlerService,
        },
    ],
})
export class CustomErrorHandlerComponent {
    title = 'custom-http-interceptor-config';

    constructor(private httpClient: HttpClient) {}

    getTasks() {
        return this.httpClient
            .get('https://jsonplaceholder.typicode.com/todos/1001')
            .subscribe(
                (res) => {
                    console.log(
                        `[CustomErrorHandler] getTasks response: `,
                        res,
                    );
                },
                (error) => {
                    console.log(`[CustomErrorHandler] getTasks error: `, error);
                },
                () => {
                    console.log('[CustomErrorHandler] getTasks done');
                },
            );
    }
}
