import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../_helpers';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from "./welcome/welcome.component";
import { AboutComponent } from "./about/about.component";
import { AdoptComponent } from './adopt/adopt.component';

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: "adopt", component: AdoptComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "about", component: AboutComponent },
  { path: "**", component: WelcomeComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
