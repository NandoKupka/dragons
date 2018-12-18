import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonsComponent } from './dragons/dragons.component';
import { ViewDragonComponent } from './view-dragon/view-dragon.component';
import { EditDragonComponent } from './edit-dragon/edit-dragon.component';
import { NewDragonComponent } from './new-dragon/new-dragon.component';

const routes: Routes = [
  { path: '', redirectTo: 'dragons', pathMatch: 'full' },
  { path: 'dragons', component: DragonsComponent },
  { path: 'dragon/:slug', component: ViewDragonComponent },
  { path: 'dragon/:slug/edit', component: EditDragonComponent },
  { path: 'newDragon', component: NewDragonComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
