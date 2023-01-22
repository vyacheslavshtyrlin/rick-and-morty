import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FilterModule } from '../filter-list/filter-list.module';
import { PaginationComponent } from '../pagintaion/components/pagination.component';
import { PaginationModule } from '../pagintaion/pagination.module';
import { CharacterListComponent } from './component/character-list.component';
import { CharacterSerivce } from './services/character.service';
import { GetCharacterEffect } from './store/effects/getCharacter.effect';
import { reducers } from './store/reducers';


const routes = [
  {
    path: '',
    component: CharacterListComponent,
  },

];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    EffectsModule.forFeature([GetCharacterEffect]),
    StoreModule.forFeature('character', reducers),
    RouterModule,
    FilterModule,
    PaginationModule,
  ],
  declarations: [CharacterListComponent],
  exports: [CharacterListComponent],
  providers: [CharacterSerivce]
})
export class CharacterModule {}
