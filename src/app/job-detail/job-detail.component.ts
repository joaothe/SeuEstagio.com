import { Component, OnInit } from '@angular/core';
import { Estagio } from '../jobs-list/job/job.model'
import { JobsService } from '../jobs-list/jobs.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'mt-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: Estagio;
  constructor(private jobsService: JobsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.jobsService.jobsById(this.route.snapshot.params['id']).subscribe(job => this.job = job);
  }

}
