import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Http404HandlerService {
    handle(error?: any) {
        console.log('[Http404HandlerService] Handled 404: ', error);
        return of(error);
    }
}
