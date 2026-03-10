import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Injectable()
export class AutoSwitchService {
  private intervalSub: Subscription | null = null;
  
  constructor() { }
  
  startAutoSwitch(callback: () => void, intervalTime: number = 5000) {
    this.stopAutoSwitch();
    this.intervalSub = interval(intervalTime).subscribe(callback);
  }

  stopAutoSwitch() {
    this.intervalSub?.unsubscribe();
    this.intervalSub = null;
  }

  isActive(): boolean {
    return this.intervalSub !== null;
  }
}
