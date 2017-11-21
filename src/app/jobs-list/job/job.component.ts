import { Component, OnInit, Input } from '@angular/core';
import {Estagio} from './job.model'
@Component({
  selector: 'mt-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
@Input() job:Estagio;
  constructor() { }

  ngOnInit() {
  }

}
