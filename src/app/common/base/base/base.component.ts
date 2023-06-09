import { Component, OnInit } from '@angular/core';
import { constants, difficulties, endpoint } from 'src/app/utils/costant';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export abstract class BaseComponent {
  public get constants() {
    return constants;
  }

  public get endpoints() {
    return endpoint;
  }

  public get difficulties() {
    return difficulties;
  }
}
