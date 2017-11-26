import { Component, OnInit } from '@angular/core';
import {Estagio} from './job/job.model'
import {JobsService} from './jobs.service'
import {HomeComponent} from '../home/home.component'
@Component({
  selector: 'mt-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  listaJobs: Estagio[] = [];



  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    this.jobsService.getEstagios().subscribe(jobs => this.listaJobs = jobs);
  }

}
