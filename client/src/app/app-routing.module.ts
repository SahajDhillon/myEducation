import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { MyattendenceComponent } from './myattendence/myattendence.component';
import { MyclassesComponent } from './myclasses/myclasses.component';
import { MyresultsComponent } from './myresults/myresults.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
      {path: 'members/:id', component: MemberDetailComponent},
      {path: 'myskills', component: MyskillsComponent},
      {path: 'myclasses', component: MyclassesComponent},
      {path: 'myresults', component: MyresultsComponent},
      {path: 'myattendence', component: MyattendenceComponent},
      {path: 'messages', component: MessagesComponent},
    ]
  },
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
