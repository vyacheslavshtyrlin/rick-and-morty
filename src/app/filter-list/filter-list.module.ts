import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { CharacterSerivce } from '../character-list/services/character.service';
import { FilterListComponent } from './component/filter-list.component';
import { GetFiltredCharacter } from './store/effects/filter.effects';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFiltredCharacter]),
    StoreModule.forFeature('filter', reducers),
    RouterModule,
    ReactiveFormsModule,

  ],
  declarations: [FilterListComponent],
  exports: [FilterListComponent],
  providers: [CharacterSerivce],
})
export class FilterModule {}
