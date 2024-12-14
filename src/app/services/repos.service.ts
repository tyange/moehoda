import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface TestRepoItem {
  id: string;
  url: string;
  title: string;
  listId: number;
}

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  constructor(private http: HttpClient) {}

  getRepos(): Observable<TestRepoItem[]> {
    return this.http.get<TestRepoItem[]>('https://example.com/user').pipe(
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      }),
    );
  }
}
