import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  characterSelector,
  errorSelector,
  isLoadingSelector,
} from '../selectors';
import { getCharactersAction } from '../store/actions/getCharacters.action';
import { GetCharacterResponseInterface } from '../types/getCharactersResponse.interface';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  data$!: Observable<GetCharacterResponseInterface>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchData();
    this.initializeValue();
  }

  fetchData(): void {
    this.store.dispatch(getCharactersAction());
  }

  initializeValue(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.data$ = this.store.pipe(select(characterSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }
}
