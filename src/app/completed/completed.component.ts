import {Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { DescriptionComponent } from '../description/description.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
    selector: 'app-completed',
    templateUrl: './completed.component.html',
    styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {

    tasks: any = [];

    constructor(private api: ApiService, public dialog: MatDialog) {
    }
    onDelete(id: string) {
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
    onUnComplete(id: String) {
        this.api.updateTask(id, false).subscribe(() => {
            this.ngOnInit();
        });
    }

    ngOnInit() {
        this.api.getTasksData(true).subscribe((data: any) => {
            this.tasks = data;
        });

    }
}
