import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../models/state.model';

@Injectable({
  providedIn: 'root'
})
export class GetTodosService {
  url = 'https://jsonplaceholder.typicode.com/todos/1';

  constructor(
    private http: HttpClient
  ) { }

  getTodo(): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}`);
  }
}
