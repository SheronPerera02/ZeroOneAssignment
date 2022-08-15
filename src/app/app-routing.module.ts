import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDvdComponent } from './home/add-dvd/add-dvd.component';
import { ViewRentedComponent } from './home/view-rented/view-rented.component';

const routes: Routes = [
  { path: 'add-dvd', component: AddDvdComponent },
  { path: 'rented', component: ViewRentedComponent },
  { path: '**', redirectTo: 'add-dvd' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
