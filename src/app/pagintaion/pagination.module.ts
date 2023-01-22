import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { CharacterSerivce } from '../character-list/services/character.service';
import { PaginationComponent } from './components/pagination.component';
import { PaginationEffect } from '../filter-list/store/effects/pagination.effects';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([PaginationEffect]),
  ],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [CharacterSerivce],
})
export class PaginationModule {}
