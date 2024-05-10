import {Component, OnInit, Inject} from '@angular/core';
import {DialogData} from '../view/view.component';
import { ApiService } from '../api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-note',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.css']
})
export class NoteComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<NoteComponent>,
                @Inject(MAT_DIALOG_DATA) public tasksData: DialogData, private api: ApiService) {
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
    onUpdate(updatedNote: String) {
        this.api.updateNote(this.tasksData.taskId, updatedNote).subscribe(data => {
            this.tasksData = data;
            this.dialogRef.close();
            location.reload();
        });
    }

    ngOnInit() {
    }

} // End Class
import {Component, OnInit, Inject} from '@angular/core';
import {DialogData} from '../view/view.component';
import {ApiService} from '../api.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-note',
    templateUrl: './description.component.html',
    styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<NoteComponent>,
                @Inject(MAT_DIALOG_DATA) public tasksData: DialogData, private api: ApiService) {
    }
    onNoClick(): void {
        this.dialogRef.close();
    }
    onUpdate(updatedNote: String) {
        this.api.updateNote(this.tasksData.taskId, updatedNote).subscribe(data => {
            this.tasksData = data;
            this.dialogRef.close();
            location.reload();
        });
    }

    ngOnInit() {
    }

}
