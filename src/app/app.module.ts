import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import {StudentsService} from './students/students.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobComponent } from './jobs-list/job/job.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostjobComponent } from './postjob/postjob.component';
import { JobsService } from './jobs-list/jobs.service';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { AboutComponent } from './about/about.component';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { ManagejobsComponent } from './managejobs/managejobs.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    StudentsComponent,
    StudentComponent,
    StudentDetailComponent,
    JobsListComponent,
    JobComponent,
    LoginComponent,
    RegisterComponent,
    PostjobComponent,
    JobDetailComponent,
    AboutComponent,
    CurriculoComponent,
    ManagejobsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [StudentsService, JobsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
