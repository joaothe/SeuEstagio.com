import { Component, OnInit } from '@angular/core';

import {StudentsService} from '../students/students.service';
import {Student} from '../students/student/student.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(private studentsService: StudentsService,
  private route: ActivatedRoute) { }

  student: Student 

  ngOnInit() {
    this.studentsService.studentsById(this.route.snapshot.params['id'])
      .subscribe(student => this.student = student);
  }

}
