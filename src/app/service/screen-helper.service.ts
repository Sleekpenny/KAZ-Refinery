import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenHelperService {
  private isDesktop: any =  new BehaviorSubject(false);

  constructor() { }

  onResize(size: any){
    if (size < 568){
      this.updateIsDesktop(false);
    } else {
      this.updateIsDesktop(true);
    }
  }

  get getIsDesktopView() {
    return this.isDesktop.asObservable();
  }

  updateIsDesktop(val: boolean){
    this.isDesktop.next(val);
  }

  isDesktopView(): Observable<boolean>{
    return this.isDesktop.asObservable().pipe(distinctUntilChanged());
  }
}
