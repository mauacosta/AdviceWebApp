import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdviceComponent } from './pages/advice/advice.component';
import { HomeComponent } from './pages/home/home.component';
import { LikedComponent } from './pages/liked/liked.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'advice', component: AdviceComponent },
  { path: 'liked', component: LikedComponent }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
