import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import {Store, StoreModule } from '@ngrx/store';
import { todos } from './redux/reducer';

import { StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({ todos }),
  StoreDevtoolsModule.instrument({
    maxAge: 25 // retains the last 25 states
  })
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
