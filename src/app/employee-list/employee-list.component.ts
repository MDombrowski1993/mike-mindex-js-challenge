import { Component, OnInit } from '@angular/core';
import { catchError, map, reduce } from 'rxjs/operators';

import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  errorMessage: string;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getAll()
      .pipe(
        reduce((emps, e: Employee) => emps.concat(e), []),
        map(emps => this.employees = emps),
        catchError(this.handleError.bind(this))
      ).subscribe();
  }

  editEmployee(ee: Employee): void {
    // Why this wont work with my approach
    // Passing emitter via bindings to dialog, 
    // but requires it to be called in binding (via fn()) so args cannot be passed from children
    // needs a refactor (no reportinEmployee, change how we interact with dialog, move @Output/EventEmitter down one component level to EE -> ReportingEmployee)
    if(!!ee){this.employeeService.save(ee)
      .subscribe(
        updateEe => {
          // Find and update the employees model with the update EE
          this.employees[this.employees.findIndex(e => e.id === updateEe.id)] = updateEe;
        },
        err => this.errorMessage = "Unable to update employee at this time."
      );}
  }

  deleteEmployee(ee: Employee): void {
     this.employeeService.remove(ee)
      .subscribe(
        () => {
          // Find and remove the employees model with the update EE
          this.employees.splice(this.employees.findIndex(e => e.id === ee.id));
        },
        err => this.errorMessage = "Unable to delete employee at this time."
        );
  }

  private handleError(e: Error | any): string {
    console.error(e);
    return this.errorMessage = e.message || 'Unable to retrieve employees';
  }
}
