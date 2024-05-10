import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import { DescriptionComponent } from '../description/description.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-today',
    templateUrl: './today.component.html',
    styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

    tasks: any = [];

    constructor(private api: ApiService, public dialog: MatDialog) {
    }

    onDelete(id: String) {
        console.log('Deleting item');
        this.api.deleteTask(id).subscribe(() => {
            this.ngOnInit();
        });
    }
    openDialog(id: String, currNote: String): void {
        const dialogRef = this.dialog.open(DescriptionComponent, {
            data: {
                taskId: id,
                note: currNote
            }
        });

        dialogRef.afterClosed().subscribe(() => {
            console.log('The dialog was closed');
        });
    }

    onComplete(id: String) {
        this.api.updateTask(id, true).subscribe(() => {
            this.ngOnInit();
        });
    }

    onUpdate(id: String, priority: Number) {
        this.api.updatePriority(id, priority).subscribe(() => {
            this.ngOnInit();
        });
    }

    ngOnInit() {
        const todayDate = new Date();

        this.api.getTodayTask(todayDate.toDateString()).subscribe(data => {
            this.tasks = data;
        });
    }
}
