import { Injectable } from '@angular/core';
import { User } from './user';
//import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost:8080/users';  // URL to web api
  constructor(private http: HttpClient, private messageService: MessageService) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }

  getUser(id : number) : Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  /** POST: add a new hero to the server */
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ id=${newUser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

    /** DELETE: delete the hero from the server */
  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

  /* GET heroes whose name contains search term */
  searchUsers(term: string): Observable<User[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found users matching "${term}"`) :
        this.log(`no users matching "${term}"`)),
      catchError(this.handleError<User[]>('searchUsers', []))
    );
  }
}
