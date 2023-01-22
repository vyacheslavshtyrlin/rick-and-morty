import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CharacterDetailsModule } from './character-details/character-details.module';
import { CharacterModule } from './character-list/character-list.module';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    CharacterModule,
    CharacterDetailsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      trace: true,
    }),
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({ router: routerReducer }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    NotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
