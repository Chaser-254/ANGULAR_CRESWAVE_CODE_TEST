import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from './task.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }
    getTasksData(isComplete: Boolean): Observable<any> {

        return this.http.get('http://localhost:3000/api/tasks/' + isComplete);
    }
    getTask(id: String): Observable<any> {
        return this.http.get('http://localhost:3000/api/tasks/edit/' + id);
    }

    addTask(task_name: String, note: String, priority: Number, date: String, isComplete: Boolean): Observable<any> {
        const task: Task = {task_name: task_name, note: note, priority: priority, date: date, isComplete: isComplete};
        return this.http.post('http://localhost:3000/api/tasks', task);
    }

    editTask(id: String, task_name: String, note: String, priority: Number, date: String, isComplete: Boolean): Observable<any> {
        const task: Task = {task_name: task_name, note: note, priority: priority, date: date, isComplete: isComplete};
        return this.http.put('http://localhost:3000/api/tasks/edit/' + id, task);
    }

    deleteTask(id: String): Observable<any> {
        return this.http.delete('http://localhost:3000/api/tasks/' + id);
    }

    updateTask(id: String, isComplete: Boolean): Observable<any> {
        const isComp = {isComplete};
        return this.http.put('http://localhost:3000/api/tasks/update/' + id, isComp);
    }

    updateNote(id: String, note: String): Observable<any> {
        const updateNote = {note};
        return this.http.put('http://localhost:3000/api/tasks/update/note/' + id, updateNote);
    }

    updatePriority(id: String, priority: Number): Observable<any> {
        const updatePriority = {priority};
        return this.http.put('http://localhost:3000/api/tasks/update/priority/' + id, updatePriority);
    }
    getTodayTask(todaysDate: String): Observable<any> {
        return this.http.get('http://localhost:3000/api/tasks/today/' + todaysDate);
    }
}
