import { Component, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-reporting-employee',
    templateUrl: './reportingEmployee.component.html',
    styleUrls: ['./reportingEmployee.component.css']
})
export class ReportingEmployeeComponent {
    @Input() eeId: number;
    @Input() ee: Employee;
    @Input() isLoading: boolean;

    ngOnInit(): void {
        this.isLoading = true;
        // Fetch ee on load
        const obs = this.employeeService.get(this.eeId);
        obs.subscribe(employee => {
            this.ee = employee;
            this.isLoading = false;
        });
    }

    editEe(): void {
        console.log('Employee edited');
    }
    deleteEe(): void {
        this.employeeService
        .remove(this.ee)
        .subscribe();
    }

    // Inject data service
    constructor(private employeeService: EmployeeService) {
    }
}
