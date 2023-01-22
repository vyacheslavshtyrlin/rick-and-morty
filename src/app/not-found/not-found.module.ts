import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './component/not-found.component';


const routes = [
  {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
  providers: []
})
export class NotFoundModule {}
