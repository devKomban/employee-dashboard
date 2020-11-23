import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  /**
   * Transfer data from to show or hide spinner
   */
  obsShowHideSpinner$ = new BehaviorSubject(false);
  
  constructor() { }

  /**
   * Show spinner
   */
  showSpinner() {
    this.obsShowHideSpinner$.next(true);
  }

  /**
   * Hide spinner
   */
  hideSpinner() {
    this.obsShowHideSpinner$.next(false);
  }

  /**
   * Get current spinner status from the observable
   */
  getSpinnerStatus() {
    return this.obsShowHideSpinner$.asObservable()
  }
}
