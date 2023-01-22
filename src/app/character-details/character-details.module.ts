import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { CharacterDetailsComponent } from './components/character-details.component';
import { GetCharacterDetailsEffect } from './store/effects/getCharacterDetails.effect';
import { CharacterByIdSerivce } from './services/characterDetails.service';

const routes = [
  {
    path: 'characters/:id',
    component: CharacterDetailsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
    RouterModule,
    EffectsModule.forFeature([GetCharacterDetailsEffect]),
    StoreModule.forFeature('characterDetails', reducers),
  ],
  declarations: [CharacterDetailsComponent],
  exports: [CharacterDetailsComponent],
  providers: [CharacterByIdSerivce],
})
export class CharacterDetailsModule {}
