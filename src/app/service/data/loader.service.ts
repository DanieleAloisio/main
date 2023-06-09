import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public subjLoader = new Subject<boolean>();

  constructor() { }

  public startLoad(): void {
    this.subjLoader.next(true);
  }

  public stopLoad(): void {
    this.subjLoader.next(false);
  }
}
