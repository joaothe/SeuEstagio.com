import { Component, OnInit } from '@angular/core';

import {Student} from './student/student.model';

import {StudentsService} from './students.service';

@Component({
  selector: 'mt-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  listStudent:Student[] = [];

  constructor(private studentsService:StudentsService){ }

  ngOnInit() {
    this.studentsService.students().subscribe(students => this.listStudent = students);
  }

}
