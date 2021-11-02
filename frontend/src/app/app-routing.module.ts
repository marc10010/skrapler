import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './components/pages/facebook/facebook.component';
import { TwitterComponent } from './components/pages/twitter/twitter.component';

const routes: Routes = [
  { path: 'twitter', component: TwitterComponent },
  { path: 'facebook', component: FacebookComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
