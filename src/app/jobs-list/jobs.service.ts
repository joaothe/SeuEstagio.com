import {Estagio} from './job/job.model'
import { SEUESTAGIO_API } from '../app.api'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class JobsService{
  constructor(private http:Http){};
  estagios: Estagio[] = [

  ];

  getEstagios():Observable<Estagio[]>{
    return this.http.get(`${SEUESTAGIO_API}/jobs`).map(response => response.json());
  }

  jobsById(id:string): Observable<Estagio>{
    return this.http.get(`${SEUESTAGIO_API}/jobs/${id}`).map(response => response.json());
  }
}
