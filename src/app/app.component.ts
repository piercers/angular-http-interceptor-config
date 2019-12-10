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
            .get('https://jsonplaceholder.typicode.com/todos')
            .subscribe(
                (res) => {
                    console.log(`getTasks response: `, res);
                },
                (error) => {
                    console.log(`error getting tasks: `, error);
                },
                () => {
                    console.log('done getTasks');
                },
            );
    }
}
