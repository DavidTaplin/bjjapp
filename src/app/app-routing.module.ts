import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LogInComponent } from './auth/log-in/log-in.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Student', component: StudentComponent},
  {path: 'Professor', component: ProfessorComponent},
  {path: 'Sign-Up', component: SignUpComponent},
  {path: 'Log-In', component: LogInComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
