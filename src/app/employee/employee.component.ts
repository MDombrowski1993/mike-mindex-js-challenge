import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

import {Employee} from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent{
  @Input() employee: Employee;
  @Output() onEeEditCallback: EventEmitter<any> = new EventEmitter();

  public onEditEmployee = ({event, data}) => {
    this.onEeEditCallback.emit({event, data});
  }

  constructor() {
  }
}
