import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodayComponent } from './today/today.component';
import { EditComponent } from './edit/edit.component';
import { CompletedComponent } from './completed/completed.component';
import { ViewComponent } from './view/view.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  {
      path: '', // Main view page for viewing task
      component: ViewComponent,
  },
  {
      path: 'completed', // Completed tasks page
      component: CompletedComponent,
  },
  {
      path: 'edit/:id', // Edit page for editing a selected task
      component: EditComponent
  },
  {
      path: 'today', // Page that displayed current date tasks
      component: TodayComponent,
  },
  {path: '**', component: PageErrorComponent} // Displays 404 error page if user try's to nav to a page not in the app.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

