import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { EditComponent } from './edit/edit.component';
import { CompletedComponent } from './completed/completed.component';
import { ViewComponent } from './view/view.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  {
      path: '',
      component: ViewComponent,
  },
  {
      path: 'completed',
      component: CompletedComponent,
  },
  {
      path: 'edit/:id',
      component: EditComponent
  },
  {
      path: 'today',
      component: TodayComponent,
  },
  {path: '**', component: PageErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

