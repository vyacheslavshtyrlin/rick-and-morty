import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { isLoadingSelector } from 'src/app/character-list/selectors';
import { paginationSelector } from 'src/app/filter-list/store/selectors';
import { FilterStateInterface } from 'src/app/filter-list/types/filterState.interface';
import {
  nextPageAction,
  prevPageAction,
} from '../../filter-list/store/actions/filter.action';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, OnDestroy {
  paginationData$: Subscription;
  pages: number;
  currentPage: number;
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnDestroy(): void {
    this.paginationData$.unsubscribe();
  }

  ngOnInit(): void {
    this.initializeValue();
  }

  initializeValue() {
    this.initializeListeners();
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }

  initializeListeners(): void {
    this.paginationData$ = this.store
      .pipe(select(paginationSelector))
      .subscribe((i) => {
        this.pages = i.pages;
        this.currentPage = i.currentPage;
      });
  }

  onNext() {
    if (this.currentPage < this.pages) {
      this.store.dispatch(nextPageAction());
    }
  }

  onPrev() {
    if (this.currentPage > 1) {
      this.store.dispatch(prevPageAction());
    }
  }
}
