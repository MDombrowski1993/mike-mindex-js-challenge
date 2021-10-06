import { Component, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../editDialog/editDialog.component';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-reporting-employee',
    templateUrl: './reportingEmployee.component.html',
    styleUrls: ['./reportingEmployee.component.css']
})
export class ReportingEmployeeComponent implements OnInit{
    @Input() eeId: number;
    @Input() ee: Employee;
    @Input() isLoading: boolean;
    @Input() editEeCb: Function;

    ngOnInit(): void {
        this.isLoading = true;
        // Fetch ee on load
        this.employeeService.get(this.eeId).subscribe(
            res => this.ee = res,
            err => console.error('Error'),
            () => this.isLoading = false
        );
    }

    openEditDialog(): void {
        const ref = this.dialog.open(EditDialogComponent, {
            width: '500px',
            data: {ee: this.ee, onSave: this.editEeCb}
        });
        ref.afterClosed().subscribe(
            res => console.log(res)
        )
    }

    deleteEe(): void {
        this.employeeService
            .remove(this.ee)
            .subscribe();
    }

    // Inject services
    constructor(private employeeService: EmployeeService, public dialog: MatDialog) {
    }
}
