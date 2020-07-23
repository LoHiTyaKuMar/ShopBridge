import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';

const routes: Routes = [
  { path: 'details/:id', component : InventoryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
