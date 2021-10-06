import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material/form-field';
import { EventEmitter } from 'events';
import { Employee } from '../employee';

@Component({
    selector: 'edit-dialog',
    templateUrl: './editDialog.component.html',
    styleUrls: ['./editDialog.component.css'],
    providers: [{provide: MatFormFieldControl, useExisting: EditDialogComponent}]
})
export class EditDialogComponent implements OnInit{
    ngOnInit(): void {
        console.log(this.dialogPayload);
    }
    saveEeEdit(event): void {
        this.dialogPayload.onSave({event, data:this.dialogPayload.ee});
    }
    constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public dialogPayload: {ee: Employee, onSave: Function}
        ){}
}