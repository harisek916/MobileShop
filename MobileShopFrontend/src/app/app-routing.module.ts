import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { CreateComponent } from './create/create.component';
import { MobiledetailComponent } from './mobiledetail/mobiledetail.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",component:TableComponent},
  {path:"mobile/add",component:CreateComponent},
  {path:"mobile/:id",component:MobiledetailComponent},
  {path:"mobile/:id/update",component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
