import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {StudentsComponent} from './students/students.component'
import {StudentDetailComponent} from './student-detail/student-detail.component'


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'students/:id', component: StudentDetailComponent}
]
