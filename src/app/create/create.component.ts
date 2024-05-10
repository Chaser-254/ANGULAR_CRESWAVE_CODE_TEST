import {Component, OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import {MatDialog} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';


@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    tasks: any = [];

    constructor(private api: ApiService, public dialog: MatDialog) {
    }

    onAddTask(form: NgForm) {
        const dateString = form.value.date.toDateString();

        this.api.addTask(form.value.task_name, form.value.note, form.value.priority, dateString, false).subscribe(() => {
            location.reload();
        });

        console.log(form.value);
        form.resetForm();
        this.closeDialog();
    }
    openDialog() {
        const dialogRef = this.dialog.open(CreateComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    closeDialog() {
        this.dialog.closeAll();
    }

    ngOnInit() {
    }

}
