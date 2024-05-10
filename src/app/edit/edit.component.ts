import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    task: any = [];

    constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) {
    }

    onEditPost(form: NgForm) {
        this.api.editTask(this.task[0]._id, form.value.task_name, form.value.note, form.value.priority, form.value.date, false).subscribe();
        this.router.navigate(['/']);
    }

    ngOnInit() {
        console.log(this.route.snapshot.params['id']);
        this.api.getTask(this.route.snapshot.params['id']).subscribe(data => {
            this.task = data;
        });
    }
}
