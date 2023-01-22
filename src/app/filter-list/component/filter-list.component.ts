import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FilterStateInterface } from '../types/filterState.interface';
import { changeFilterAction } from '../store/actions/filter.action';
import { select, Store } from '@ngrx/store';
import { filterFeatureSelector } from '../store/selectors';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css'],
})
export class FilterListComponent implements OnInit {
  form!: FormGroup;
  data: FilterStateInterface;

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.store.pipe(select(filterFeatureSelector)).subscribe(
      (i) =>
        (this.form = this.fb.group({
          name: i.name,
          status: i.status,
        }))
    );
  }

  onChange(): void {
    const data = this.form.value;
    this.store.dispatch(changeFilterAction({ data }));
  }
}
