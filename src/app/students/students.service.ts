import {Student} from './student/student.model'

import {SEUESTAGIO_API} from '../app.api'
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class StudentsService{

  constructor(private http:Http){};


    students(): Observable<Student[]>{
      // Just want the Json
      return this.http.get(`${SEUESTAGIO_API}/students`).map(response => response.json());
    }

    studentsById(id:string): Observable<Student> {
      return this.http.get(`${SEUESTAGIO_API}/students/${id}`).map(response => response.json());
    }


  }
