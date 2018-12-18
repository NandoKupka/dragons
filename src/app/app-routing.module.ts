import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragonsComponent } from './dragons/dragons.component';
import { ViewDragonComponent } from './view-dragon/view-dragon.component';
import { EditDragonComponent } from './edit-dragon/edit-dragon.component';
import { NewDragonComponent } from './new-dragon/new-dragon.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'dragons', component: DragonsComponent, canActivate: [AuthService] },
  { path: 'dragon/:slug', component: ViewDragonComponent, canActivate: [AuthService] },
  { path: 'dragon/:slug/edit', component: EditDragonComponent, canActivate: [AuthService] },
  { path: 'newDragon', component: NewDragonComponent, canActivate: [AuthService] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})


export class AppRoutingModule { }
