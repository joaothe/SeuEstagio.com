import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {StudentsComponent} from './students/students.component'
import {StudentDetailComponent} from './student-detail/student-detail.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {JobsListComponent} from './jobs-list/jobs-list.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'students/:id', component: StudentDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'joblist', component: JobsListComponent}
]
