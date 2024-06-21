// scroll.service.ts

import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  getScroll(): Observable<number> {
    return fromEvent(window, 'scroll').pipe(
      map(() => window.pageYOffset || document.documentElement.scrollTop)
    );
  }
}
