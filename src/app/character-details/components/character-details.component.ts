import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import {
  characterDetailsSelector,
  errorSelector,
  isLoadingSelector,
} from '../selectors';
import { getCharacterDetailsAction } from '../store/actions/getCharactersDetails.action';
import { CharactereDetailsInterface } from '../types/characterDetails.interface';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: [
    './character-details.component.css',
    '../../character-list/component/character-list.component.css',
  ],
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  id: string;
  character: CharactereDetailsInterface;
  characterSubscribiton: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.characterSubscribiton.unsubscribe();
  }

  initializeValues() {
    this.error$ = this.store.pipe(select(errorSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.id = this.route.snapshot.paramMap.get('id');
  }

  fetchData() {
    this.store.dispatch(getCharacterDetailsAction({ id: this.id }));
  }

  initializeListeners(): void {
    this.characterSubscribiton = this.store
      .pipe(select(characterDetailsSelector))
      .subscribe((i: CharactereDetailsInterface | null) => {
        this.character = i;
      });
  }
}
