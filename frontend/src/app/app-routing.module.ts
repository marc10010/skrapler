import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedInComponent } from './components/pages/linkedIn/linkedIn.component';
import { TwitterComponent } from './components/pages/twitter/twitter.component';

const routes: Routes = [
  { path: 'twitter', component: TwitterComponent },
  { path: 'linkedIn', component: LinkedInComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
