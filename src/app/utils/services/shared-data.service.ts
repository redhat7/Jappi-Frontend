import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private closeNavSubject = new BehaviorSubject<boolean>(true);
  closeNav$ = this.closeNavSubject.asObservable();

  toggleNavClass() {
    this.closeNavSubject.next(!this.closeNavSubject.value);
  }
}
