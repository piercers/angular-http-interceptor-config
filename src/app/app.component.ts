import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'http-interceptor-config';

    constructor(private httpClient: HttpClient) {}

    getTasks() {
        return this.httpClient
            .get('https://jsonplaceholder.typicode.com/todos/1001')
            .subscribe(
                (res) => {
                    console.log(`[AppComponent] getTasks response: `, res);
                },
                (error) => {
                    console.log(`[AppComponent] getTasks error: `, error);
                },
                () => {
                    console.log('[AppComponent] getTasks done');
                },
            );
    }
}
