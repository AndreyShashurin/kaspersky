import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [  
  { path: '', component: HomeComponent },
  { path: 'detail/:id',component: DetailComponent },
  { path: 'update/:id', component: UpdateComponent},
  { path: 'add', component: AddComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
