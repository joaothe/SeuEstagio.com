import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {StudentsComponent} from './students/students.component'
import {StudentDetailComponent} from './student-detail/student-detail.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {JobsListComponent} from './jobs-list/jobs-list.component'
import {PostjobComponent} from './postjob/postjob.component'
import {JobDetailComponent} from './job-detail/job-detail.component'
import {AboutComponent} from './about/about.component'
import {CurriculoComponent} from './curriculo/curriculo.component'
import {ManagejobsComponent} from './managejobs/managejobs.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'students/:id', component: StudentDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'joblist', component: JobsListComponent},
  {path: 'postjob', component: PostjobComponent},
  {path: 'jobs/:id', component: JobDetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'curriculo', component: CurriculoComponent},
  {path: 'managejobs', component: ManagejobsComponent}
]
