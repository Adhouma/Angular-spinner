import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private loadingSource = new BehaviorSubject(null);
  loading$ = this.loadingSource.asObservable();

  constructor() { }

  show() {
    this.loadingSource.next(true);
  }

  hide() {
    this.loadingSource.next(false);
  }
}
